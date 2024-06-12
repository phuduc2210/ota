import { createVersion, getLatestVersion } from "../models/versionModel.js";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const uploadVersion = (req, res) => {
  const { version, changelog } = req.body;
  const apkFile = req.file;

  if (!apkFile) return res.status(400).send("No file uploaded");

  const versionData = {
    version,
    changelog,
    apk_path: apkFile.path,
    created_at: new Date(),
  };

  createVersion(versionData, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("Version uploaded successfully");
  });
};

const getLatestVersionInfo = (req, res) => {
  getLatestVersion((err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(404).send("No versions found");

    const latestVersion = results[0];
    res.status(200).json(latestVersion);
  });
};

export { upload, uploadVersion, getLatestVersionInfo };
