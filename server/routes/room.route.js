const express = require('express');
const authCtrl = require('../controller/auth.controller')
const roomCtrl = require('../controller/room.controller');

const router = express.Router()

router.route("/api/rooms")
  // .get(roomCtrl.welcome)
  .get(roomCtrl.list)
  .post(roomCtrl.create);

router.route('/api/rooms/:roomId')
    .get(roomCtrl.read)
    .put(authCtrl.requireSignin,authCtrl.hasAuthorization,roomCtrl.update)

router.route('/api/rooms/changeOwner/:roomId/:userId')
    .put(authCtrl.requireSignin,roomCtrl.changeOwner)

router.route('/api/room/joinRoom/:roomId/:userId')
    .put(authCtrl.requireSignin,roomCtrl.joinRoom)

router.route('/apit/room/leaveRoom/:roomId/:userId')
    .put(authCtrl.requireSignin,roomCtrl.leaveRoom)

router.route('/api/room/getUserRooms/:userId')
    .get(authCtrl.requireSignin,roomCtrl.getUserRooms)

router.param('roomId',roomCtrl.roomByID)

module.exports = router