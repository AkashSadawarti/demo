const express = require("express");

const app = express();

const port = process.env.port;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Succesful" });
});

app.listen(port, () => {
  console.log("I am on..... NodeJS project");
});
