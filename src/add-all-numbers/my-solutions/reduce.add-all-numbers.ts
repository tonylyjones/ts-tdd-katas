export function getSum(numbers: number[]): number {
  return numbers.reduce((sum, element) => sum + element, 0)
}
