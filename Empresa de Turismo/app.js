const express = require("express");

const app = express();

//Conexão com db Mysql
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'luciano',
  password: '12345',
  database: 'empresa'
});

connection.connect(function(err) {
  if (err) {
    console.error('Erro ao realizar a conexão! ' + err.stack);
    return;
  }
  console.log('Conectado no banco de dados! ');
});

connection.query("insert into empresa(")

app.get("/", (req, res) => {
  res.send("olaaa");
});

app.get("/contato", (req, res) => {
  res.send("")
})

app.listen(8080);

