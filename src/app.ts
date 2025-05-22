import dotenv from "dotenv";
dotenv.config()
import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import routes from "./routes";
import connectDB from "./config/db";
const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

const server = http.createServer(app);

app.use("/api", routes);

connectDB();

server.listen(3003, () => {
  console.log("server running on  http://localhost:3003");
});


