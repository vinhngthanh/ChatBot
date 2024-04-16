import requests

def ask_chatgpt(text, question):
    api_key = "sk-proj-ix6xNF1GgBPxdxdimDbPT3BlbkFJF6PdKMQRkqflDNkIC1de"
    headers = {
        "Authorization": f"Bearer {api_key}"
    }
    data = {
        "model": "gpt-3.5-turbo",
        "prompt": f"Context: {text} \n\n Question: {question}"
    }
    response = requests.post("https://api.openai.com/v1/completions", json=data, headers=headers)
    response_json = response.json()
    return response_json.get('choices', [{}])[0].get('text', "").strip()
