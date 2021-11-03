const Router = require('express');
const router = new Router();
const controller = require('./apiController');

router.post('/user', controller.registration)
router.get('/user',	controller.showallid)
router.get('/user/:id', controller.showparam)
router.put('/user/:id',	controller.change)

module.exports = router;