const secondLargestElement = (array) => {
  const largestElement = Math.max(...array)
  let element = -Number.MAX_VALUE

  for (let i = 0; i < array.length; i++) {
    if (element < array[i] && array[i] !== largestElement) {
      element = array[i]
    }
  }

  return element
}

export { secondLargestElement }
