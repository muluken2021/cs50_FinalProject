from flask import Blueprint, request, jsonify
from models import Transaction
from database.db import db

transaction_bp = Blueprint("transactions", __name__)

@transaction_bp.route("/transactions", methods=["GET"])
def get_transactions():
    transactions = Transaction.query.all()
    return jsonify([t.to_dict() for t in transactions])

@transaction_bp.route("/transaction/add", methods=["POST"])
def add_transaction():
    data = request.json
    try:
        transaction = Transaction(
            user_id=data["user_id"],
            type=data["type"],
            category=data["category"],
            amount=float(data["amount"]),  # <- convert to float
            description=data.get("description", "")
        )
        db.session.add(transaction)
        db.session.commit()
        return jsonify({"message": "Transaction added successfully"})
    except KeyError as e:
        return jsonify({"error": f"Missing field {e}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@transaction_bp.route("/transaction/<int:id>", methods=["DELETE"])
def delete_transaction(id):
    transaction = Transaction.query.get(id)

    if not transaction:
        return jsonify({"error": "Transaction not found"}), 404

    db.session.delete(transaction)
    db.session.commit()

    return jsonify({"message": "Transaction deleted"})

@transaction_bp.route("/transaction/<int:id>", methods=["PUT"])
def update_transaction(id):
    data = request.json

    transaction = Transaction.query.get(id)

    if not transaction:
        return jsonify({"error": "Transaction not found"}), 404

    transaction.type = data["type"]
    transaction.category = data["category"]
    transaction.amount = data["amount"]
    transaction.description = data.get("description", "")

    db.session.commit()

    return jsonify({"message": "Transaction updated"})

@transaction_bp.route("/summary", methods=["GET"])
def get_summary():

    income = db.session.query(db.func.sum(Transaction.amount)).filter_by(type="income").scalar() or 0

    expense = db.session.query(db.func.sum(Transaction.amount)).filter_by(type="expense").scalar() or 0

    balance = income - expense

    return jsonify({
        "total_income": income,
        "total_expense": expense,
        "balance": balance
    })
    
    
    
