import requests
from openai import OpenAI

def ask_chatgpt(text, question):
    client = OpenAI(
        api_key = "sk-proj-YFp8Hxx5H9DQTUZ7nSbJT3BlbkFJYpMQGlAOUyOp7D260hvk"
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