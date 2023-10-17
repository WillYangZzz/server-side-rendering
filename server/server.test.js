import { test, expect } from 'vitest'
import { screen } from '@testing-library/dom'
import request from 'supertest'
import server from './server.js'

test(`GET '/' displays the artists names`, async () => {
  const res = await request(server).get('/')
  console.log(res)
})
