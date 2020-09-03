const  express = require('express')
const  authCtrl = require('../controllers/auth.controller')


const router = express.Router()

router.router('/auth/signin')
    .post(authCtrl.signin)

router.route('/auth/signout')
    .get(authCtrl.signout)

module.exports = router