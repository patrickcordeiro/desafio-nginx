const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) values('Patrick')`;
connection.query(sql);
connection.end();

app.get("/", (req, res) => {
  const mysql = require("mysql");
  const connection = mysql.createConnection(config);

  connection.query("SELECT name FROM people", (err, result) => {
    if (err) throw err;

    const names = result
      .map((row) => {
        return `<p>Nome: ${row.name}</p>`;
      })
      .join("\n");

    res.send(`<h1>Full Cycle Rocks!</h1> ${names}`);
  });

  connection.end();
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
