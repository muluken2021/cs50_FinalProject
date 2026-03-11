import os

class Config:
    SQLALCHEMY_DATABASE_URI = "postgresql://postgres:admin@localhost:5432/finance_db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False