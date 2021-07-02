const express = require('express')
const router = express.Router()
const routes = {
    produtos: require('./produtos'),
    tipos: require('./tipos')
}

router.use('/produtos', routes.produtos)
router.use('/tipos', routes.tipos)

module.exports = router