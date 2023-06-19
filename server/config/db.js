import mongoose from "mongoose";
import env from "dotenv";
import chalk from "chalk";

env.config();
const mongoUrl = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoUrl, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(
      chalk.bgGrey.greenBright(`MongoDB connected ${conn.connection.host}`)
    );
  } catch (error) {
    console.error(`Error :${error.message}`);
    process.exit();
  }
};

export { connectDB };
