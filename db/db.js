const mongoose = require("mongoose")

const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/livraria").then(() => {
    console.log("Conectou!");
  }).catch(() => {
    console.log("Erro ao conectar!");
  })
}
main()

module.exports = mongoose