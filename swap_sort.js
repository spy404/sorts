export function minSwapsToSort(items) {
  const sortedArray = items.slice()
  sortedArray.sort()
  const indexMap = {}
  for (let i = 0; i < items.length; i++) {
    indexMap[items[i]] = i
  }
  let swaps = 0
  for (let i = 0; i < items.length; i++) {
    if (items[i] !== sortedArray[i]) {
      const temp = items[i]
      items[i] = items[indexMap[sortedArray[i]]]
      items[indexMap[sortedArray[i]]] = temp

      indexMap[temp] = indexMap[sortedArray[i]]
      indexMap[sortedArray[i]] = i
      swaps++
    }
  }
  return swaps
}
