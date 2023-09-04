import express from 'express'
import cors from 'cors'

import ColorsController from './controllers/colors'

const app = express()

// localhost:3000 para el front end y localhost para el Jest del front end
const whitelist = ['http://localhost', 'http://localhost:3000']
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