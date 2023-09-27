const {
    createOneFarmacia,
    listAllFarmacias,
    listAllFarmaciasStatus,
    listOneFarmacia,
    updateOneFarmacia,
    updateOneFarmaciaStatus,
    deleteOneFarmacia,
    restoreOneFarmacia
} = require('../controllers/farmacia.controller')
const { Router } = require('express')
const { auth } = require('../middleware/auth')

class FarmaciaRouter {
    routesFromFarmacia() {
        const farmaciaRoutes = Router()
        farmaciaRoutes.post('/createOneFarmacia', auth, createOneFarmacia)
        farmaciaRoutes.get('/listAllFarmacias', auth, listAllFarmacias)
        farmaciaRoutes.get('/listAllFarmaciasStatus/:status', auth, listAllFarmaciasStatus)
        farmaciaRoutes.get('/listOneFarmacia/:id', auth, listOneFarmacia)
        farmaciaRoutes.patch('/updateOneFarmacia/:id', auth, updateOneFarmacia)
        farmaciaRoutes.patch('/updateOneFarmaciaStatus/:id/status', auth, updateOneFarmaciaStatus)
        farmaciaRoutes.delete('/deleteOneFarmacia/:id', auth, deleteOneFarmacia)
        farmaciaRoutes.patch('/restoreOneFarmacia/:id', auth, restoreOneFarmacia)
        return farmaciaRoutes
    }
}

module.exports = new FarmaciaRouter()