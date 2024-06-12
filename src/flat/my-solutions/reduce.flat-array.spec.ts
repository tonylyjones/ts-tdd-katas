import { describe, expect, it } from 'vitest'
import { reduceFlatArray } from './reduce.flat-array'

describe('Flat - Map', () => {
  it('Should merge 2 arrays', () => {
    const given = [[1], [2]]
    const result = reduceFlatArray(given)
    expect(result).toMatchObject([1, 2])
  })

  it('Should merge N arrays', () => {
    const given = [[1], [2], [6], [10]]
    const result = reduceFlatArray(given)
    expect(result).toMatchObject([1, 2, 6, 10])
  })
})
