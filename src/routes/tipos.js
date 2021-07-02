const express = require('express')
const router = express.Router()
const Tipo = require('../models/Tipo')

//converte o body em objeto
router.use(express.json())

//Pesquisa todos os tipos
router.get('/', async (req, res) =>{
    try{
        let filter = {}
        if(req.query.tipo) filter.tipo = req.query.tipo
        const limit = Math.min(parseInt(req.query.limit), 10) || 10
        const skip = parseInt(req.query.skip) || 0
        
        let tipos = []
        tipos = await Tipo.find(filter).limit(limit).skip(skip)
        res.json(tipos)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar os tipos"})
    }
})

//Pesquisa os tipos pelo id
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id
        let tipo = await Tipo.findById(id)

        if(!tipo){
            res.statusCode = 404
            throw new Error("O tipo não foi encontrado")
        }

        res.json(tipo)
    } catch (err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar o tipo"})
    }
})

//Salva o tipo
router.post('/', async (req, res) => {
    try{
        const tipo = new Tipo(req.body)
        const resultado = await tipo.save()
        res.json(resultado)
    } catch (err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao salvar o tipo"})
    }
})

//Atualiza um tipo de acordo com o id
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const tipo = req.body
        const resultado = await Tipo.findByIdAndUpdate(id, tipo)
        res.json(resultado)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao alterar o produto"})
    }
})

//Deleta o tipo de acordo com o id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const resultado = await Tipo.findByIdAndDelete(id)
        res.json(resultado)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao deletar o produto"})
    }
})

module.exports = router