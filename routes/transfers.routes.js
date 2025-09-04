import express from 'express'
import { getTransfers } from '../controllers/transfers.controller.js'

const router = express.Router()

router.get('/', getTransfers)

export default router
