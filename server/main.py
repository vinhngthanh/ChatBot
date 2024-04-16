from flask import Flask, request, jsonify
from flask_cors import CORS
from app.pdf_extract import extract_text_from_pdf
from app.chatGPT import ask_chatgpt

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_pdf():
    if 'pdf' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['pdf']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    text = extract_text_from_pdf(file)
    return jsonify({'text': text}), 200

@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.get_json()
    text = data.get('text')
    question = data.get('question')
    answer = ask_chatgpt(text, question)
    return jsonify({'answer': answer}), 200

if __name__ == '__main__':
    app.run(debug=True)
