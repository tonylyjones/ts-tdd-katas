import { describe, expect, it } from 'vitest'
import { forEach } from './for.for-each'

describe('forEach', () => {
  it('should concat all elements', () => {
    const givenElements = 'Hello'.split('')

    let actual = ''
    const givenCallback = (element: string) => {
      actual = `${actual}${element}`
    }

    forEach(givenElements, givenCallback)

    expect(actual).toBe('Hello')
  })

  it('should reverse all elements', () => {
    const givenElements = 'Hello'.split('')

    let actual = ''
    const givenCallback = (element: string) => {
      actual = `${element}${actual}`
    }

    forEach(givenElements, givenCallback)

    expect(actual).toBe('olleH')
  })

  it('should add all elements', () => {
    const givenElements = [1, 2, 3, 4, 5]

    let actual = 0
    const givenCallback = (element: number) => {
      actual += element
    }

    forEach(givenElements, givenCallback)

    expect(actual).toBe(15)
  })
})
