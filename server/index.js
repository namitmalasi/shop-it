const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database Connected!!!");
  })
  .catch((err) => {
    console.error(err);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening at port no: ${PORT}`);
});
