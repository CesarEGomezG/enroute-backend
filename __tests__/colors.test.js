import app from '../app'
import request from 'supertest'

import ColorRepository from "../repositories/colors"
import databaseColors from "../mocks/colors"

test('Conexión a la base de datos + Colores de base de datos correctos', async () => {
  const colors = await ColorRepository.getColors()
  expect(colors.length).toBe(13)
  expect(colors).toEqual(databaseColors)
})

test('Endpoint obtener colores', async () => {
  const res = await request(app).get('/colors')
  expect(res.statusCode).toBe(200)
  expect(res.body.length).toBe(13)
  expect(res.body).toEqual(databaseColors)
})