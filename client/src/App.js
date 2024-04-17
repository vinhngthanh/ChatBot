import React, { useState } from "react";
import Ask from "./components/Ask";
import UploadPDF from "./components/UploadPDF";

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
};

const App = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const [fileUploading, setFileUploading] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PDF Uploader</h1>
      <UploadPDF
        fileIsUploading={setFileUploading}
        fileIsUploaded={setFileUploaded}
      />
      <h1 style={styles.heading}>Ask Question</h1>
      <Ask fileIsUploading={fileUploading} fileIsUploaded={fileUploaded} />
    </div>
  );
};

export default App;
