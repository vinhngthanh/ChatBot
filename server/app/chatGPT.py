from openai import OpenAI
from dotenv import load_dotenv
import os

def ask_chatgpt(text, question):
    load_dotenv()
    client = OpenAI(
        api_key = os.getenv("OPENAI_API_KEY")
    )
    prompt =  f"Context: {text}\nQuestion: {question}"

    response = client.chat.completions.create(
        messages = [
            {
                "role": "user", 
                "content": prompt
             }
        ],
        model = "gpt-3.5-turbo"
    )
    
    return response.choices[0].message.content