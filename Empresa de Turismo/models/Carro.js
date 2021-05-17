
const db = require("./db");

const Carro = db.sequelize.define('carro',{
  
  modelo: {
    type: db.Sequelize.STRING
  },
  passageiros: {
    type: db.Sequelize.INTEGER
  },
  dataFab: {
    type: db.Sequelize.DATE
  },
  placa: {
    type: db.Sequelize.STRING
  }
});
/*
Carro.create({
  modelo: 'Paradiso New G7 1200',
  passageiros: 40,
  dataFab: '2018-02-12',
  placa: 'IV1T111'
})
*/

module.exports = Carro

