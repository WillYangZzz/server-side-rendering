/**
 * @vitest-environment jsdom
 */

import { test, expect } from 'vitest'
import request from 'supertest'
import server from './server.js'
import { screen } from '@testing-library/dom'
import matchers from '@testing-library/jest-dom/matchers'

test(`GET '/' displays the artists names`, async () => {
  // Request root route (/)
  const res = await request(server).get('/')
  // Find the heading by role
  document.body.innerHTML = res.text
  console.log(document.body.innerHTML)
})
