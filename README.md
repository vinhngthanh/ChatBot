# CHATBOT

## Overview

CHATBOT is a web application that facilitates question-answering based on uploaded PDF documents.

## Setup Instructions

1. **Clone the repository**: `git clone https://github.com/vinhngthanh/ChatBot.git`.
2. **Install dependencies**: Navigate to the root folder and execute `pip install -r requirements.txt` to install Python dependencies and `npm install axios` to install the necessary Node.js package.
3. **Configure environment variables**: Create a `.env` file based on `.env.example` provided in the root folder. Fill in the required environment variables, including the OpenAI API key.
4. **Start the application**: Launch two terminal instances. In the first terminal, navigate to the root directory and execute `py ./server/main.py` to start the Flask server. In the second terminal, navigate to the `client` folder and run `npm start` to launch the web interface.
5. **Access the application**: Open your web browser and navigate to `http://localhost:PORT`, replacing `PORT` with the port number specified in your environment or the default port.
6. **Use the application**: Click on the "Choose File" button to upload a PDF file. After that, users can enter questions in the input box and click on the "Ask" button to generate answers.

## Architecture and Technologies Used

### Backend

- **Python Flask**: Serves as the core backend framework to handle API requests and interact with uploaded PDF files.
- **Flask-CORS**: A Flask extension required to handle Cross-Origin Resource Sharing (CORS), enabling the frontend hosted on a different domain or port to interact securely with the backend.

### Frontend

- **React.js**: Part of the requirement.
- **Axios**: Used for making HTTP requests from the frontend to the backend.
- **Bootstrap**: Utilized for styling.

### Communication

- **REST API**: The server and client communicate over HTTP using RESTful requests. This allows the frontend to send user questions and PDF files to the backend and receive answers in return.

## Assumptions and Limitations

### Assumptions

- **User Environment**: It is assumed that users have the necessary setup to run Python and Node.js applications, including package managers like `pip` and `npm`.
- **API Key Security**: Users are expected to secure their own OpenAI API keys and manage them confidentially using environment variables.
- **File Types**: The application currently supports only PDF files.

### Limitations

- **Ask**: User can only ask one question at a time and don't have access to chat history.
- **Size of PDFs**: Large PDF file might not be fully passed to OpenAPI because of limited tokens.
- **Performance**: Processing large PDF files can be slow.
- **Error Handling**: Comprehensive error handling might still need further development.
