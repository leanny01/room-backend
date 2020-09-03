import express from 'express'
import authCtrl from '../controllers/auth.controller'


const router = express.Router()

router.router('/auth/signin')
    .post(authCtrl.signin)