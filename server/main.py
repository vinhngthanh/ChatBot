from flask import Flask, request, jsonify
from flask_cors import CORS
from app.pdf_extract import extract_text_from_pdf
from app.chatGPT import ask_chatgpt

app = Flask(__name__)
CORS(app)

pdf_text = None

@app.route('/upload', methods=['POST'])
def upload_pdf():
    global pdf_text
    if 'pdf' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['pdf']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    pdf_text = extract_text_from_pdf(file)
    print("Success")
    return jsonify({'text': 'PDF uploaded successfully'}), 200

@app.route('/ask', methods=['POST'])
def ask_question():
    global pdf_text 
    if pdf_text is None:
        return jsonify({'error': 'Please upload a PDF first.'}), 400
    data = request.get_json()
    question = data.get('question')
    answer = ask_chatgpt(pdf_text, question)
    return jsonify({'answer': answer}), 200

if __name__ == '__main__':
    app.run(debug=True)
