require("dotenv").config();
const connectDB = require("./db");
const car = require("./models/carModel");

const jsoncars = require("./Cars.json");

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    await car.deleteMany();
    await car.create(jsoncars);
    console.log("Success!!!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
