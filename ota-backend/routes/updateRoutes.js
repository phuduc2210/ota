import express from "express";
import {
  upload,
  uploadVersion,
  getLatestVersionInfo,
  downloadUpdate
} from "../controllers/updateController.js";

const router = express.Router();

router.post("/upload", upload.single("apk"), uploadVersion);
router.get("/latest", getLatestVersionInfo);
router.get('/download/:filename', downloadUpdate);

export default router;
