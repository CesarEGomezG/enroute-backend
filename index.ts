import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import ColorsController from './controllers/colors'

dotenv.config()

const app = express()
const port = process.env.PORT

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: (origin: any, callback: any) => {
    if (whitelist.includes(origin) || origin === undefined) {
      callback(null, true)
    } else {
      callback(new Error('Unauthorized'))
    }
  }
}
app.use(cors(corsOptions))

app.use('/colors', ColorsController)

app.listen(port, () => {
  console.log(`Enroute API running at port ${port}`)
})