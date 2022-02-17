var express = require("express");
var app = express();
var Usuario = require("./model/Usuario");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/add", function (req, res) {
  res.render("index.ejs", {});
});

app.post("/add", function (req, res) {
  var usuario = new Usuario({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    foto: req.body.foto,
  });

  usuario.save(function (err, docs) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.send(docs.nome + " foi salvo com sucesso!");
    }
  });
});

app.get("/", function (req, res) {
  Usuario.find({}).then(function (docs) {
    res.render("list.ejs", { Usuarios: docs });
  });
});

app.get("/del/:id", function (req, res) {
  Usuario.findByIdAndDelete(req.params.id, function (err, doc) {
    if (err) {
      res.send("Aconteceu o seguinte erro: " + err);
    } else {
      res.redirect("/");
    }
  });
});

app.listen("3000", function () {
  console.log("O servidor foi iniciado na porta 3000");
});
