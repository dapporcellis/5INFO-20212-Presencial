var conexao = require("../config/database");

var UsuarioSchema = conexao.Schema({
  nome: { type: "String" },
  email: { type: "String" },
  foto: { type: "String" },
  senha: { type: "String" },
});

module.exports = conexao.model("Usuario", UsuarioSchema);
