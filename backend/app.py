from flask import Flask
from flask_cors import CORS
from config import Config
from database.db import db

# Import your blueprints
from routes.transaction_routes import transaction_bp
from routes.auth_routes import auth_bp

app = Flask(__name__)
app.config.from_object(Config)

# Enable CORS
CORS(app)

# Initialize database
db.init_app(app)

# Register blueprints
app.register_blueprint(transaction_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    # Ensure tables are created before starting
    with app.app_context():
        db.create_all()

    app.run(debug=True)