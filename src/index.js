var http = require("http");

const express = require("express");
const app = express();
var ids = 0;
var students = [];

app.get("/students", (req, res) => {
  res.send(students);
});

app.get("/students/:id", (req, res) => {
  res.send(students[req.params.id]);
});

app.post("/check", (req, res) => {
  let date = new Date();
  var student = {
    id: ids++,
    firstname: req.query.firstname,
    lastname: req.query.lastname,
    group: req.query.group,
    createdAt: date.toLocaleString(),
    updatedAt: date.toLocaleString()
  };
  students.push(student);
});

app.delete("/student/:id", function (req, res) {
  const id = req.params.id - 1;
  if (id !== -1) students.splice(id, 1);
  else res.send("Ошибка");
  res.send(students);
});

app.put("/student/:id", function (req, res) {
  let date = new Date();
  for (var i = 0; i < students.length; i++) {
    students[req.params.id - 1].firstname = req.query.firstName;
    students[req.params.id - 1].lastname = req.query.lastName;
    students[req.params.id - 1].group = req.query.group;
    students[req.params.id - 1].date.toLocaleString();
    break;
  }
  res.send([req.params.id - 1]);
});

app.get("/", (req, res) => {
  res.send("base page");
});

app.listen(8080);
