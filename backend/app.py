from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow requests from React frontend

# PostgreSQL configuration
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost:5432/finance_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Models
class Transaction(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(10))  # 'income' or 'expense'
    category = db.Column(db.String(50))
    amount = db.Column(db.Float)
    description = db.Column(db.String(200))

    def to_dict(self):
        return {
            'id': self.id,
            'type': self.type,
            'category': self.category,
            'amount': self.amount,
            'description': self.description
        }

# Routes
@app.route('/transactions', methods=['GET'])
def get_transactions():
    transactions = Transaction.query.all()
    return jsonify([t.to_dict() for t in transactions])

@app.route('/transaction/add', methods=['POST'])
def add_transaction():
    data = request.json
    new_txn = Transaction(
        type=data['type'],
        category=data['category'],
        amount=data['amount'],
        description=data.get('description', '')
    )
    db.session.add(new_txn)
    db.session.commit()
    return jsonify({'message': 'Transaction added successfully'}), 201

# Run the server
if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)