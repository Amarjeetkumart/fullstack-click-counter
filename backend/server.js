require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected");
});

app.get("/click", (req, res) => {
    db.query("UPDATE counter SET clicks = clicks + 1 WHERE id=1", () => {
        db.query("SELECT clicks FROM counter WHERE id=1", (err, result) => {
            res.json(result[0]);
        });
    });
});

app.get("/count", (req, res) => {
    db.query("SELECT clicks FROM counter WHERE id=1", (err, result) => {
        res.json(result[0]);
    });
});

app.listen(process.env.PORT, () =>
    console.log("Server running on port " + process.env.PORT)
);
