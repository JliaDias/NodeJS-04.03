const express = require("express")
var agendamentos = require(".\banco")
const app = express()

app.listen(8081, function(){
    console.log("Servidor está rodando!!")
})

app.get("/", function(req,res){
    res.end("Parametro ok")
})

app.get("/cadastrar/:nome/:endereco/:bairro/: cep/:cidade/:estado/:observacao", function(req, res) {
    
    agendamentos.create({
        nome: req.params.nome,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cidade: req.params.cidade,
        cep: req.params.cep,
        estado: req.params.estado,
        observacao: req.params.obervacao
    })
    res.send("Nome: " +req.params.nome+ "\nEndereco: "+req.params.endereco+ "\nBairro: " +req.params.bairro + "\nCEP: " +req.params.cep + "\nCidade: " +req.params.cidade + "\nEstado: " +req.params.estado + "\nObservação: " +req.params.observacao)

})



