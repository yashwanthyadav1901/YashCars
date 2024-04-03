const express = require("express");
const app = express();
const db = require("./db");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
