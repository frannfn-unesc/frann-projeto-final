const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const routes = require('./routes')
const jwt = require('jsonwebtoken')

app.post('/login', async (req, res) => {
    const token = await jwt.sign({nome: "publico"}, 'secreta', { expiresIn: 600 })
    res.json(token)
})

app.use(async (req, res, next) =>{
    try{
        const authorization = req.headers.authorization
        const token = authorization.split('Bearer ')[1]
        const credencial = await jwt.verify(token, 'secreta')
        next()
    } catch(err){
        console.error(err.message)
        res.status(401).json({error: "Usuário não autorizado"})
    }
})

app.use('/api', routes)

app.listen(PORT, function(){
    console.log(`Servidor iniciado na porta ${PORT}`)
})