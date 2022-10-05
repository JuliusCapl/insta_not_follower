// import express from 'express';
const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
destination: "uploads/",
  filename: function (req, file, callback) {
    callback("", "following.json");
  },
});

const upload = multer({
  storage: storage,
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/files", upload.single('following'), (req, res) => {
  res.send("la raja");
});
app.listen(3000, () => "server running https://localhost:3000");