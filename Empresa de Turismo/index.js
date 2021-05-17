
const express = require("express");
const app = express();
const handlebars = require("express-handlebars")
const moment = require("moment");
const Motorista = require("./models/Motorista");
const Viagem = require("./models/Viagem");
const Carro = require("./models/Carro");

app.engine('handlebars', handlebars({
  defaultLayout:'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
  helpers: {
    formatDate: (date) => {
      return moment(date).format('DD/MM/YYYY')
    }}
}))
app.set('view engine', 'handlebars')

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())


//Rota para mostrar Motorista
app.get('/motorista', function(req, res){
  Motorista.findAll({order: [['id', 'DESC']]}).then(function(motorista){
     res.render('motorista',{motorista: motorista});
  });
});
//Rota para cadastrar Motorista
app.get('/cad-motorista', function(req, res){
  res.render('cad-motorista');
});
//Rota para receber cadastro de motorista
app.post('/add-motorista', function(req, res){
  Motorista.create({
    nome: req.body.nome,
    dataNasc: req.body.dataNasc,
    sexo: req.body.sexo,
    telefone: req.body.telefone,
    rua: req.body.rua,
    numero: req.body.numero,
    bairro: req.body.bairro,
    cidade: req.body.cidade,
    uf: req.body.uf
  }).then(function(){
    res.redirect("/motorista")
  }).catch(function(erro){
    res.send("Erro: Cadastro de motorista nao realizado!")
  })
});

//Rota para apagar motorista 
app.get("/del-motorista/:id", function(req, res) {
  Motorista.destroy({
    where: {'id': req.params.id}
  }).then(function(){
    res.redirect("/motorista")
  }).catch(function(erro){
    res.send('Motorista não apagado!');
  })
});
//Rota editar Motorista
app.get('/edit-motorista/:id', function(req, res){
  Motorista.findOne({id:req.params.id}).then((motorista) => {
    res.render('edit-motorista', {motorista: motorista.toJSON()})
  }).catch((erro) => {
    res.redirect("/motorista")
  })
});
//Rota para receber edição de motorista
app.post('/motorista/edit', (req, res) => {
  Motorista.findOne({id: req.body.id}).then((motorista) =>{
    motorista.nome = req.body.nome
    motorista.dataNasc = req.body.dataNasc
    motorista.sexo = req.body.sexo
    motorista.telefone = req.body.telefone
    motorista.rua = req.body.rua
    motorista.numero = req.body.numero
    motorista.bairro = req.body.bairro
    motorista.cidade = req.body.cidade
    motorista.uf = req.body.uf
    motorista.save().then(() => {
      //res.send('Sucesso')
      res.redirect('/motorista')
    })
  }).catch((erro) =>{
    res.send('erro', 'Houve um erro')
    res.redirect('/pagamento')
  })
});

///////// Carro /////////
//Rota para mostrar Carros
app.get('/carro', function(req, res){
  Carro.findAll({order: [['id', 'DESC',]]}).then(function(carro){
     res.render('carro',{carro: carro});
  });
});
//Rota para cadastrar Carro
app.get('/cad-carro', function(req, res){
  res.render('cad-carro');
});
//Rota para receber Carro
app.post('/add-carro', function(req, res){
  Carro.create({
    modelo: req.body.modelo,
    passageiros: req.body.passageiros,
    dataFab: req.body.dataFab,
    placa: req.body.placa
  }).then(function(){
    res.redirect("/carro")
  }).catch(function(erro){
    res.send("Erro: Cadastro de carro nao realizado!")
  })
});
//Rota para apagar carro
app.get("/del-carro/:id", function(req, res) {
  Carro.destroy({
    where: {'id': req.params.id}
  }).then(function(){
    res.redirect("/carro")
  }).catch(function(erro){
    res.send('Carro não apagado!');
  })
});

//Rota editar Carro
app.get('/edit-carro/:id', function(req, res){
  Carro.findOne({id:req.params.id}).then((carro) => {
    res.render('edit-carro', {carro: carro.toJSON()})
  }).catch((erro) => {
    res.redirect("/carro")
  })
});
//Rota para receber edição de Carro
app.post('/carro/edit', (req, res) => {
  Carro.findOne({id: req.body.id}).then((carro) =>{
    carro.modelo = req.body.modelo
    carro.passageiros = req.body.passageiros
    carro.dataFab = req.body.dataFab
    carro.placa = req.body.placa
    carro.save().then(() => {
      //res.send('Sucesso')
      res.redirect('/carro')
    })
  }).catch((erro) =>{
    res.send('erro', 'Houve um erro')
    res.redirect('/carro')
  })
});

  //////////  Viagem///////
//Rota mostrar Viagens
app.get('/viagem', function(req, res){
  Viagem.findAll({order: [['id', 'DESC',]]}).then(function(viagem){
     res.render('viagem',{viagem: viagem});
  });
});
//Rota para cadastrar Viagens
app.get('/cad-viagem', function(req, res){
  res.render('cad-viagem');
});


//Rota para receber Viagem
app.post('/add-viagem', function(req, res){
  Viagem.create({
    destino: req.body.destino,
    saida: req.body.saida,
    retorno: req.body.retorno,
    idMotorista: req.body.idMotorista,
    idCarro: req.body.idCarro
  }).then(function(){
    res.redirect("/viagem")
  }).catch(function(erro){
    res.send("Erro: Cadastro de viagem nao realizado!")
  })
});
//Rota para apagar Viagem
app.get("/del-viagem/:id", function(req, res) {
  Viagem.destroy({
    where: {'id': req.params.id}
  }).then(function(){
    res.redirect("/viagem")
  }).catch(function(erro){
    res.send('Viagem não apagada!');
  })
});

//Rota editar Viagem
app.get('/edit-viagem/:id', function(req, res){
  Viagem.findOne({id:req.params.id}).then((viagem) => {
    res.render('edit-viagem', {viagem: viagem.toJSON()})
  }).catch((erro) => {
    res.redirect("/viagem")
  })
});
//Rota para receber edição de viagem
app.post('/viagem/edit', (req, res) => {
  Viagem.findOne({id: req.body.id}).then((viagem) =>{
    viagem.destino = req.body.destino
    viagem.saida = req.body.saida
    viagem.retorno = req.body.retorno
    viagem.idMotorista = req.body.idMotorista
    viagem.idCarro = req.body.idCarro
    viagem.save().then(() => {
      //res.send('Sucesso')
      res.redirect('/viagem')
    })
  }).catch((erro) =>{
    res.send('erro', 'Houve um erro')
    res.redirect('/viagem')
  })
});

app.listen(8080);