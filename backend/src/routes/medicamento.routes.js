const {
    createOneMedicamento,
    listAllMedicamentoTipo,
    listOneMedicamento,
    updateOneMedicamento,
    updateOneMedicamentoStatus,
    deleteOneMedicamento,
    restoreOneMedicamento
} = require('../controllers/medicamento.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class MedicamentoRouter {
    routesFromMedicamento() {
        const medicamentoRoutes = Router()
        medicamentoRoutes.post('/createOneMedicamento', auth, createOneMedicamento)
        medicamentoRoutes.get('/listAllMedicamentoTipo', auth, listAllMedicamentoTipo)
        medicamentoRoutes.get('/listOneMedicamento/:id', auth, listOneMedicamento)
        medicamentoRoutes.patch('/updateOneMedicamento/:id', auth, updateOneMedicamento)
        medicamentoRoutes.patch('/updateOneMedicamentoStatus/:id/status', auth, updateOneMedicamentoStatus)
        medicamentoRoutes.delete('/deleteOneMedicamento/:id', auth, deleteOneMedicamento)
        medicamentoRoutes.patch('/restoreOneMedicamento/:id', auth, restoreOneMedicamento)
        return medicamentoRoutes
    }
}
module.exports = new MedicamentoRouter()