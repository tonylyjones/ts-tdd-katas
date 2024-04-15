import { describe, expect, it } from 'vitest'
import { getPowerOfTwo } from './map.power-of-two'

describe('getPowerOfTwo', () => {
  it('should get empty given an empty array', () => {
    const given: number[] = []

    const actual = getPowerOfTwo(given)

    expect(actual).toHaveLength(0)
  })

  it('should get powered of two of each element of a given array', () => {
    const given = [1, 2, 3]

    const actual = getPowerOfTwo(given)

    expect(actual).toEqual([1, 4, 9])
  })
})
