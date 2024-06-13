import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import "./uploadFile.scss";
import axiosInstance from "../../../axiosConfig";

const UploadFile = () => {
  const [file, setFile] = useState();
  const {versionRef} = useRef()
  const handleFileUpload = async (e) => {
    const uploadFile = e.target.files[0];
    setFile(uploadFile);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("version", versionRef.current.value);
    formData.append("apk", file);

    try {
      await axiosInstance.post("/update/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully");
    } catch (err) {
      console.log(err);
    }
  };

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
            ref={versionRef}
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
