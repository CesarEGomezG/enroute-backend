import express from 'express'
import cors from 'cors'

import ColorsController from './controllers/colors'

const app = express()

const CLIENT_URL = process.env.CLIENT_URL
const JEST_URL = process.env.JEST_URL

// localhost:3000 para el front end y localhost para el Jest del front end
const whitelist = [JEST_URL, CLIENT_URL]
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

export default app