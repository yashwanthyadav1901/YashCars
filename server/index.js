const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const routes = require("./routes/CarRoutes");
const PORT = process.env.PORT;

const corsOptions = {
  origin: "https://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
