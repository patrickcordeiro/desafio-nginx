const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "password",
  database: "nodedb",
};

app.get("/", (req, res) => {
  const name = "Patrick";
  const connection = mysql.createConnection(config);
  const sqlInsert = `INSERT INTO people(name) values('${name}')`;

  connection.query(sqlInsert);

  const sqlGet = `SELECT id, name FROM people`;

  connection.query(sqlGet, (error, results, fields) => {
    if (error) {
      throw error;
    }

    let table = "<table>";
    table += "<tr<th>Nome</th></tr>";
    for (let people of results) {
      table += `<tr><td>${people.name} ${people.id}</td></tr>`;
    }

    table += "</table>";
    res.send("<h1>Full Cycle Rocks!</h1>" + table);
  });
  connection.end();
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
