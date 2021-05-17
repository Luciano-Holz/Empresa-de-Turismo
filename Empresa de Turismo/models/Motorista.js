
const db = require("./db");

const Motorista = db.sequelize.define('motorista',{
  
  nome: {
    type: db.Sequelize.STRING
  },
  dataNasc: {
    type: db.Sequelize.DATE
  },
  sexo: {
    type: db.Sequelize.ENUM('M','F')
  },
  telefone: {
    type: db.Sequelize.STRING
  },
  rua: {
    type: db.Sequelize.STRING
  },
  numero: {
    type: db.Sequelize.INTEGER
  },
  bairro: {
    type: db.Sequelize.STRING
  },
  cidade: {
    type: db.Sequelize.STRING
  },
  uf: {
    type: db.Sequelize.STRING
  }
})
/*
Motorista.create({
  nome: 'Manoel dos Santos',
  dataNasc: '1980-12-01',
  sexo: 'M',
  telefone: '53900112233',
  rua: 'Rua das Acácias',
  numero: 120,
  bairro: 'Lomba',
  cidade: 'São Lourenço do Sul',
  uf: 'RS'
});
*/

module.exports = Motorista

