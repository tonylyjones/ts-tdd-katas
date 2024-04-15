export function forEach<T>(elements: T[], callback: (element: T) => void) {
  for (const element of elements) {
    callback(element)
  }
}
