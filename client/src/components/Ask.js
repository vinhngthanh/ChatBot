import React, { useState } from "react";
import axios from "axios";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAskQuestion = () => {
    axios
      .post("http://localhost:5000/ask", { question })
      .then((response) => {
        setAnswer(response.data.answer);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button onClick={handleAskQuestion}>Ask</button>
      <p>Answer: {answer}</p>
    </div>
  );
};

export default AskQuestion;
