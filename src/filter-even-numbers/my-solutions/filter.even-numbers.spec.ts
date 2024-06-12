import { describe, expect, it } from 'vitest'
import { filterEven } from './filter.even-numbers'

describe('Even Number - Filter', () => {
  it('Should returns empty when array is empty', () => {
    const given: number[] = []
    const result = filterEven(given)
    expect(result).toMatchObject([])
  })

  it('Should keep 0', () => {
    const given: number[] = [0]
    const result = filterEven(given)
    expect(result).toContain(0)
  })

  it('Should remove 1', () => {
    const given: number[] = [0, 1]
    const result = filterEven(given)
    expect(result).not.toContain(1)
  })

  it('Should keep multiples of 2', () => {
    const given: number[] = [0, 12, 33, 59, 66]
    const result = filterEven(given)
    expect(result).toContain(0)
    expect(result).toContain(12)
    expect(result).toContain(66)
  })

  it('Should remove non multiples of 2', () => {
    const given: number[] = [0, 12, 33, 59, 66]
    const result = filterEven(given)
    expect(result).not.toContain(33)
    expect(result).not.toContain(59)
  })
})
