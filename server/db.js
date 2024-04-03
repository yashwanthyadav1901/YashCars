const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function mongoDB() {
  mongoose.connect(process.env.DATABASE_URL);

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("Database connection successful");
  });

  connection.on("error", (err) => {
    console.error("Error connecting to database:", err);
  });
}

mongoDB();

module.exports = mongoDB;
