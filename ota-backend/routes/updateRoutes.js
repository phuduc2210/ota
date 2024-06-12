import express from "express";
import {
  upload,
  uploadVersion,
  getLatestVersionInfo,
} from "../controllers/updateController.js";

const router = express.Router();

router.post("/upload", upload.single("apk"), uploadVersion);
router.get("/latest", getLatestVersionInfo);

export default router;
