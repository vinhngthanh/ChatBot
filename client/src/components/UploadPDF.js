import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("No file uploaded.");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadMessage("No file uploaded.");
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("pdf", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        console.log(response.data);
        setUploadMessage(
          "File uploaded successfully! Now using file name: " + file.name
        );
      })
      .catch((error) => {
        console.error(error);
        setUploadMessage("Upload failed. Please try again.");
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
      {}
    </div>
  );
};

export default FileUpload;
