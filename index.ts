import express from 'express'
import dotenv from 'dotenv'

import ColorsController from './controllers/colors'

dotenv.config()

const app = express()
const port = process.env.PORT

app.use('/colors', ColorsController)

app.listen(port, () => {
  console.log(`Enroute API running at port ${port}`)
})