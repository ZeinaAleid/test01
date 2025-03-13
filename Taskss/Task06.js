const express = require("express");
const { request } = require("http");
const { urlencoded } = require("body-parser");
const app = express();

const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "127.0.0.1",
    port: "3306",
    user: "root",
    database: "BackEnd-course",
  })
  .promise();

app.get("/lectures", async (req, res) => {
  const data = await pool.execute("select * from lectures");
  res.send(data[0]);
});

app.listen(30000, () => {
  console.log("listen on port 30000");
});
