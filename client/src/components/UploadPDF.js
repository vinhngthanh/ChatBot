import React, { useState, useRef } from "react";
import axios from "axios";

const FileUpload = ({ fileIsUploading, fileIsUploaded }) => {
  const [uploadMessage, setUploadMessage] = useState("No file uploaded.");
  const [uploading, setUploading] = useState(false);
  const prevFileRef = useRef(null);

  const handleFileChange = (event) => {
    fileIsUploaded(false);
    const selectedFile = event.target.files[0];
    setUploadMessage("No file uploaded.");
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };

  const uploadFile = (file) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("pdf", file);

    axios
      .post("http://localhost:5000/upload", formData)
      .then((response) => {
        console.log(response.data);
        fileIsUploading(false);
        setUploadMessage(
          "File uploaded successfully! Now using file name: " + file.name
        );
      })
      .catch((error) => {
        console.error(error);
        fileIsUploading(false);
        fileIsUploaded(false);
        setUploadMessage("Upload failed. Please try again.");
      })
      .finally(() => {
        setUploading(false);
        fileIsUploading(false);
        fileIsUploaded(true);
        prevFileRef.current = file;
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} disabled={uploading} />
      {uploading && <p>Loading...</p>}
      {!uploading && <p>{uploadMessage}</p>}
    </div>
  );
};

export default FileUpload;
