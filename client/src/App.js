import React, { useState } from "react";
import Ask from "./components/Ask";
import UploadPDF from "./components/UploadPDF";
import "./App.css";

const App = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);

  return (
    <div className="app-container">
      <h1>PDF Uploader</h1>
      <UploadPDF
        fileIsUploading={setFileUploading}
        fileIsUploaded={setFileUploaded}
      />
      <h1>Ask Question</h1>
      <Ask fileIsUploading={fileUploading} fileIsUploaded={fileUploaded} />
    </div>
  );
};

export default App;
