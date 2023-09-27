const { Router } = require('express')
const { routesFromUsuario } = require('./usuario.routes')
const { routesFromFarmacia } = require('./farmacia.routes')
const { routesFromMedicamento } = require('./medicamento.routes')

const routes = Router()

routes.use('/api', [
  routesFromUsuario(),
  routesFromFarmacia(),
  routesFromMedicamento(),
])

module.exports = routes