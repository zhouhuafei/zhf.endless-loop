import { endlessLoop } from '@root/src'

test('endlessLoop 3000ms', () => {
  const ms = 3000
  const d1 = new Date().getTime()
  endlessLoop(ms)
  const d2 = new Date().getTime()
  expect(d2 - d1).toBeGreaterThanOrEqual(3000)
})
