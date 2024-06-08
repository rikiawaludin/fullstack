const express = require("express");
const mysql = require("mysql");
const cors = require('cors');
const app = express();

app.use(cors());

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

//ambil semua data users
app.get("/api/v1/users", (req, res) => {
  console.log('get api users di request');
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
