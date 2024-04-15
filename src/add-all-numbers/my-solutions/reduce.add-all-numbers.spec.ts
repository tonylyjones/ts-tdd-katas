import { describe, expect, it } from 'vitest'
import { getSum } from './reduce.add-all-numbers'

describe('getSum', () => {
  it('should get the sum of the two elements of a couple', () => {
    const given = [1, 2]

    const actual = getSum(given)

    expect(actual).toEqual(3)
  })

  it('should get the sum of all elements of a given array', () => {
    const given = [1, 2, 3, 4]

    const actual = getSum(given)

    expect(actual).toEqual(10)
  })
})
