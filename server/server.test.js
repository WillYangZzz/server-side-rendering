/**
 * @vitest-environment jsdom
 */

import { test } from 'vitest'
import request from 'supertest'
import server from './server.js'

test(`GET '/' displays the artists names`, async () => {
  // Request root route (/)
  const res = await request(server).get('/')
  // Find the heading by role
  document.body.innerHTML = res.text
  console.log(document.body.innerHTML)
})
