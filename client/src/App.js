import React from "react";
import Ask from "./components/Ask";
import UploadPDF from "./components/UploadPDF";

const App = () => {
  return (
    <div>
      <h1>PDF Uploader</h1>
      <UploadPDF />
      <h1>Ask Question</h1>
      <Ask />
    </div>
  );
};

export default App;
