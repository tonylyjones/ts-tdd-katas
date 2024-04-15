export function mapFizzBuzz(start: number): Array<string | number> {
  return Array.from({ length: start }, (v, k) => k + 1).map(element => {
    if (element % 3 === 0 && element % 5 === 0) return 'fizzbuzz'
    if (element % 3 === 0) return 'fizz'
    if (element % 5 === 0) return 'buzz'
    return element
  })
}
