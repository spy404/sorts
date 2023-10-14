export function insertionSort(unsortedList) {
  const len = unsortedList.length
  for (let i = 1; i < len; i++) {
    let j
    const tmp = unsortedList[i]
    for (j = i - 1; j >= 0 && unsortedList[j] > tmp; j--) {
      unsortedList[j + 1] = unsortedList[j]
    }
    unsortedList[j + 1] = tmp
  }
}

export function insertionSortAlternativeImplementation(array) {
  const length = array.length
  if (length < 2) return array

  for (let i = 1; i < length; i++) {
    const currentItem = array[i]
    let j = i - 1

    while (j >= 0 && array[j] > currentItem) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = currentItem
  }
  return array
}
