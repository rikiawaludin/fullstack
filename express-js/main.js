const express = require("express");
const mysql = require("mysql");
const app = express();

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fullstack",
});

database.connect((err) => {
  if (err) throw err;
  console.log("Database connected");
});

//sebagai gerbang masuk utama API
app.get("/", (req, res) => {
  database.query("SELECT * FROM users", (err, rows) => {
    if (err) throw err;
    res.json({
      success: true,
      message: "getting users data",
      data: rows,
    });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
