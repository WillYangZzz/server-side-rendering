/**
 * @vitest-environment jsdom
 */
import request from 'supertest'
import server from '../server'
import { test, expect } from 'vitest'
import { screen } from '@testing-library/dom'
import matchers from '@testing-library/jest-dom/matchers'
// expect.extend(matchers)

//Test 1
test('GET "/" displays the links', async () => {
  const res = await request(server).get('/')
  document.body.innerHTML = res.text
  const navlinks = screen.getAllByRole('link')
  expect(navlinks[0].textContent).toMatch('Kea in Flight')
})

test()
