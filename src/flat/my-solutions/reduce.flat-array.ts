export const reduceFlatArray = (arrays: any[][]) => {
  return arrays.reduce((acc: any[], arr: any[]) => [...acc, ...arr], [])
}
