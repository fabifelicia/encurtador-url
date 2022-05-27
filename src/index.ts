import { URLController } from './controller/URLController'
import express, { Request, Response } from 'express'

const api = express()
const urlController = new URLController()

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000

api.use(express.json())


api.post('/shorten', urlController.shorten)

api.get('/:hash', urlController.redirect)

api.listen(PORT, () => console.log('Express listening'))
