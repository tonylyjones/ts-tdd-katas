export function getHighestNumber(numbers: number[]): number | null {
  if (!numbers?.length) return null
  return [...numbers].sort().at(-1)!
}
