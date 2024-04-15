import { describe, expect, it } from 'vitest'
import { mapFizzBuzz } from './map.fizz-buzz'

describe('mapFizzBuzz', () => {
  it('should get only numbers given a number less than 3', () => {
    const given = 2
    const actual = mapFizzBuzz(given)
    expect(actual).toEqual([1, 2])
  })

  it('should get fizz for each number divisible by 3', () => {
    const given = 3
    const actual = mapFizzBuzz(given)
    expect(actual).toEqual([1, 2, 'fizz'])
  })

  it('should get buzz for each number divisible by 5', () => {
    const given = 5
    const actual = mapFizzBuzz(given)
    expect(actual).toEqual([1, 2, 'fizz', 4, 'buzz'])
  })

  it('should get fizzbuzz for each number divisible by 3 and by 5', () => {
    const given = 15
    const actual = mapFizzBuzz(given)
    expect(actual).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
