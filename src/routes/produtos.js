const express = require('express')
const router = express.Router()
const Produto = require('../models/Produto')
const Tipo = require('../models/Tipo')
const Marca = require('../models/Marcas')
const axios = require('axios').default

//converte o body em objeto
router.use(express.json())

//Pesquisa todos os produtos
router.get('/', async (req, res) =>{
    try{
        let filter = {}
        if(req.query.nome) filter.nome = req.query.nome
        const limit = Math.min(parseInt(req.query.limit), 10) || 10
        const skip = parseInt(req.query.skip) || 0
        
        let produtos = []
        produtos = await Produto.find(filter).limit(limit).skip(skip)
        res.json(produtos)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar os produtos"})
    } 
})

//Pesquisa os produtos pelo id
router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id
        let produto = await Produto.findById(id).populate(['tipo', 'marca'])

        const marca = await axios.get('http://localhost:3000/api/marcas/' + produto.marca.id)
        produto.marca = marca.data

        if(!produto){
            res.statusCode = 404
            throw new Error("O produto não foi encontrado")
        }

        res.json(produto)
        
    } catch (err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao pesquisar o produto"})
    }
})

//Salva o produto
router.post('/', async (req, res) => {
    try{
        const produto = new Produto(req.body)
        const resultado = await produto.save()
        res.json(resultado)
    } catch (err){
        console.error(err.message)
        res.status(500).json({error: "Erro ao salvar o produto"})
    }
})

//Atualiza um produto de acordo com o id
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id
        const produto = req.body
        const resultado = await Produto.findByIdAndUpdate(id, produto)
        res.json(resultado)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao alterar o produto"})
    }
})

//Deleta o produto de acordo com o id
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const resultado = await Produto.findByIdAndDelete(id)
        res.json(resultado)
    } catch {
        console.error(err.message)
        res.status(500).json({error: "Erro ao deletar o produto"})
    }
})

module.exports = router