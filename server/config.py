import os

basedir = os.path.abspath(os.path.dirname(__file__))

class Config:
    
    @staticmethod
    def init_app(app):
        app.config["SESSION_PERMANENT"] = False
        app.config["API_KEY"] = "sk-proj-ix6xNF1GgBPxdxdimDbPT3BlbkFJF6PdKMQRkqflDNkIC1de"