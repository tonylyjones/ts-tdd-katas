import { describe, expect, it } from 'vitest'
import { flatArray } from './for-each.flat-array'

describe('Flat - ForEach', () => {
  it('Should merge 2 arrays', () => {
    const given = [[1], [2]]
    const result = flatArray(given)
    expect(result).toMatchObject([1, 2])
  })

  it('Should merge N arrays', () => {
    const given = [[1], [2], [6], [10]]
    const result = flatArray(given)
    expect(result).toMatchObject([1, 2, 6, 10])
  })
})
