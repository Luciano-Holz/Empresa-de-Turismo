
const Motorista = require("./Motorista");
const db = require("./db");
const Carro = require("./Carro");


const Viagem = db.sequelize.define('viagem',{
  destino: {
    type: db.Sequelize.STRING
  },
  saida: {
    type: db.Sequelize.DATE
  },
  retorno: {
    type: db.Sequelize.DATE
  },
  idMotorista: {
    type: db.Sequelize.INTEGER,
    references: {
      model: Motorista,
      key: 'id'
    }
  },
  idCarro: {
    type: db.Sequelize.INTEGER,
    references: {
      model: Carro,
      key: 'id'
    }
  }
})


/*
Viagem.create({
  destino:'Jaguarão',
  saida: '2018-07-10',
  retorno: '2018-07-10',
  idMotorista:'3',
  idCarro: '3'
});*/

//Motorista.belongsToMany(Carro, {through: 'Viagem'});
//Carro.belongsToMany(Motorista, {through: 'Viagem'});


//Criar tabela
//Carro.sync({force: true});
//Motorista.sync({force: true});
//Viagem.sync({force: true});

module.exports = Viagem
