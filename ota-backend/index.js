import express from "express";
import { db } from "./connectDB.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
// import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cookieParser());

// Cấu hình CORS
// app.use(cors({
//   origin: 'http://localhost:3000', // Cho phép origin của frontend
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Cho phép cookies và headers đặc biệt
// }));

app.get("/", (req, res) => {
  res.json("This is Backend Server!");
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.listen(8800, () => {
  console.log("Connected to Backend server!");
});
