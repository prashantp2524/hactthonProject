import express from "express";

import { connectDB } from "./config/db.js";
import env from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "./routes/index.js";
// import bodyParser from "body-parser";

const app = express();
app.use(cors());

env.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(process.env.PORT, () => {
  console.log(
    chalk.bgGrey.greenBright(`Server running on port ${process.env.PORT}`)
  );
});
