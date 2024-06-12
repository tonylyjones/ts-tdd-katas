export const flatArray = (arrays: any[][]) => {
  const result: any[] = []
  arrays.forEach(arr => {
    arr.forEach(item => result.push(item))
  })
  return result
}
