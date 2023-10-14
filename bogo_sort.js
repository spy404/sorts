export function isSorted(array) {
  const length = array.length
  for (let i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }
  return true
}

function shuffle(array) {
  for (let i = array.length - 1; i; i--) {
    const m = Math.floor(Math.random() * i)
    const n = array[i - 1]
    array[i - 1] = array[m]
    array[m] = n
  }
}

export function bogoSort(items) {
  while (!isSorted(items)) {
    shuffle(items)
  }
  return items
}
