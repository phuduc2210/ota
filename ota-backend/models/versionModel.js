import { db } from "../connectDB.js";

const createVersion = (versionData, callback) => {
  const query = "INSERT INTO versions SET ?";
  db.query(query, versionData, callback);
};

const getLatestVersion = (callback) => {
  const query = "SELECT * FROM versions ORDER BY created_at DESC LIMIT 1";
  db.query(query, callback);
};

export { createVersion, getLatestVersion };
