import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./uploadFile.scss";

const UploadFile = () => {
  const [file, setFile] = useState();
  const handleFileUpload = async (e) => {
    const uploadFile = e.target.files[0];
    setFile(uploadFile);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <h2>Upload your OTA file to Server!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-submit">
          <TextField
            id="outlined-multiline-flexible"
            label="Version"
            multiline
            maxRows={4}
          />
          <input type="file" onChange={(e) => handleFileUpload(e)} />
        </div>
        <Button variant="contained" type="submit" className="submit-btn">
          Upload
        </Button>
      </form>
    </div>
  );
};

export default UploadFile;
