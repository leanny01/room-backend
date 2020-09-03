const express  = require('express')
const userCtrl = require( './../controller/user.controller')
const authCtrl = require( './../controller/auth.controller')

const router = express.Router()

router.route('/api/')
  .get(userCtrl.welcome)

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

module.exports = router
