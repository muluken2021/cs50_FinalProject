from flask import Flask
from flask_cors import CORS
from config import Config
from database.db import db
from routes.transaction_routes import transaction_bp

app = Flask(__name__)
app.config.from_object(Config)

CORS(app)

db.init_app(app)

app.register_blueprint(transaction_bp)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)