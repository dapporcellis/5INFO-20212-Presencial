const mongoose = require("mongoose");

const uri =
  "mongodb://aluno:aluno@cluster0-shard-00-00.djh8t.mongodb.net:27017,cluster0-shard-00-01.djh8t.mongodb.net:27017,cluster0-shard-00-02.djh8t.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-sh4lgt-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;
