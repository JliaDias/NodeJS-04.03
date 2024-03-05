const Sequelize = require("sequelize")
const sequelize = new Sequelize("bancoExemplo", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Servidor Ativo!")
}).catch(function(erro){
    console.log("Falha de conexão: " + erro)
})

const agendamentos = sequelize.define("agendamentos",{
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    }, 
    observacao: {
        type: Sequelize.STRING
    }
})

// agendamentos.sync({force: true})
agendamentos.create({
    nome: "Miguel",
    endereco: "Rua Agenor Rocha, 213",
    bairro: "Vila Síria",
    cidade: "São Paulo",
    cep: "08420650",
    estado: "SP",
    observacao: "Teste do campo observação"

})

module.exports = agendamentos