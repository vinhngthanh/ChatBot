import React, { useState } from "react";
import axios from "axios";

const AskQuestion = ({ fileIsUploading, fileIsUploaded }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isGeneratingQuestion, setIsGeneratingQuestion] = useState(false);

  const handleAskQuestion = () => {
    setIsGeneratingQuestion(true);
    axios
      .post("http://localhost:5000/ask", { question })
      .then((response) => {
        setAnswer(response.data.answer);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsGeneratingQuestion(false);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        onClick={handleAskQuestion}
        disabled={
          fileIsUploading ||
          !fileIsUploaded ||
          isGeneratingQuestion ||
          !question.trim()
        }
      >
        Ask
      </button>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default AskQuestion;
