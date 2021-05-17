
const Sequelize = require('sequelize');

const sequelize = new Sequelize('empresa','luciano', '12345', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports= {
  Sequelize: Sequelize,
  sequelize: sequelize
}

sequelize.authenticate().then(function(){
  console.log('Conexão realizada  com sucesso!');
}).catch(function(err){
  console.log('Erro ao realizar a conexão com o BD:' + err)
});
