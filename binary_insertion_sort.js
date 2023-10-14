function binarySearch(array, key, start, end) {
  if (start === end) {
    if (array[start] > key) {
      return start
    } else {
      return start + 1
    }
  }

  if (start > end) {
    return start
  }

  const mid = Math.floor((start + end) / 2)

  if (array[mid] < key) {
    return binarySearch(array, key, mid + 1, end)
  } else if (array[mid] > key) {
    return binarySearch(array, key, start, mid - 1)
  } else {
    return mid
  }
}

export function binaryInsertionSort(array) {
  const totalLength = array.length
  for (let i = 1; i < totalLength; i += 1) {
    const key = array[i]
    const indexPosition = binarySearch(array, key, 0, i - 1)
    array.splice(i, 1)
    array.splice(indexPosition, 0, key)
  }
  return array
}
