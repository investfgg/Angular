const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

// Estabilizar a conexão no banco de dados

const db = mysql.createConnection({
    host: "localhost",
    user: "rfscam",
    password: "rfscam24",
    database: "rfscam",
});

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    }
    else {
      console.log("successfully Connected to DB");
    }
  });

// Estabilizando a porta

  server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....dddd!!!!");
    }

    else 
    {
        console.log("Started....!!!! 8085");

    }
});

// Criando os registros da tabela de Empregados

server.post("/api/empregado/add", (req, res) => {
    let details = {
      stname: req.body.stname,
      course: req.body.course,
      fee: req.body.fee,
    };

    let sql = "INSERT INTO EMPREGADO SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Erro de criação do registro na tabela de Empregados!" });
      } else {
        res.send({ status: true, message: "Criação do registro na tabela de Empregados com sucesso!" });
      }
    });
  });

// Ver os registros da tabela de empregados

server.get("/api/empregado", (req, res) => {
    var sql = "SELECT * FROM EMPREGADO";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

// Localiza os registros da tabela de empregados

server.get("/api/empregado/:id", (req, res) => {
    var studentid = req.params.id;
    var sql = "SELECT * FROM EMPREGADO WHERE EMPR_ID=" + studentid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

// Atualiza os registros da tabela de empregados

server.put("/api/empregado/update/:id", (req, res) => {
    let sql =
      "UPDATE EMPREGADO SET NOME='" + req.body.stname +
      "', EMAIL='" + req.body.course +
      "', CARGO='" + req.body.fee +
      "', DEPTO_ID='" + req.body.fee +
      "'  WHERE EMP_ID=" + req.params.id;
  
    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "Erro de atualização do registro na tabela de Empregados!" });
      } else {
        res.send({ status: true, message: "Atualização do registro na tabela de Empregados com sucesso!" });
      }
    });
  });

  // Exclui os registros da tabela de empregados

  server.delete("/api/empregado/delete/:id", (req, res) => {
    let sql = "DELETE FROM EMPREGADO WHERE EMP_ID=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Erro de exclusão do registro na tabela de Empregados!" });
      } else {
        res.send({ status: true, message: "Exclusão do registro na tabela de Empregados!" });
      }
    });
  });

// Criando os registros da tabela de Departamentos

server.post("/api/departamento/add", (req, res) => {
    let details = {
      stname: req.body.stname,
      course: req.body.course,
      fee: req.body.fee,
    };

    let sql = "INSERT INTO DEPARTAMENTO SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "Erro de criação do registro na tabela de Departamentos!" });
      } else {
        res.send({ status: true, message: "Criação do registro na tabela de Departamentos com sucesso!" });
      }
    });
  });

// Ver os registros da tabela de Departamentos

server.get("/api/departamento", (req, res) => {
    var sql = "SELECT * FROM DEPARTAMENTO";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

// Localiza os registros da tabela de Departamentos

server.get("/api/departamento/:id", (req, res) => {
    var studentid = req.params.id;
    var sql = "SELECT * FROM DEPARTAMENTO WHERE DEPTO_ID =" + studentid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

// Atualiza os registros da tabela de Departamentos

server.put("/api/departamento/update/:id", (req, res) => {
    let sql =
      "UPDATE DEPARTAMENTO SET NOME='" + req.body.stname +
      "'  WHERE DEPTO_ID=" + req.params.id;
  
    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "Erro de atualização do registro na tabela de Departamentos!" });
      } else {
        res.send({ status: true, message: "Atualização do registro na tabela de Departamentos com sucesso!" });
      }
    });
  });

  // Exclui os registros da tabela de Departamentos

  server.delete("/api/departamento/delete/:id", (req, res) => {
    let sql = "DELETE FROM DEPARTAMENTO WHERE DEPTO_ID=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Erro de exclusão do registro na tabela de Departamentos!" });
      } else {
        res.send({ status: true, message: "Exclusão do registro na tabela de Departamentos com sucesso!" });
      }
    });
  });