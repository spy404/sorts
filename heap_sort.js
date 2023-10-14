Array.prototype.heapify = function (index, heapSize) {
  let largest = index
  const leftIndex = 2 * index + 1
  const rightIndex = 2 * index + 2

  if (leftIndex < heapSize && this[leftIndex] > this[largest]) {
    largest = leftIndex
  }

  if (rightIndex < heapSize && this[rightIndex] > this[largest]) {
    largest = rightIndex
  }

  if (largest !== index) {
    const temp = this[largest]
    this[largest] = this[index]
    this[index] = temp

    this.heapify(largest, heapSize)
  }
}

export function heapSort(items) {
  const length = items.length

  for (let i = Math.floor(length / 2) - 1; i > -1; i--) {
    items.heapify(i, length)
  }
  for (let j = length - 1; j > 0; j--) {
    const tmp = items[0]
    items[0] = items[j]
    items[j] = tmp
    items.heapify(0, j)
  }
  return items
}
