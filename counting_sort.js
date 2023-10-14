export const countingSort = (arr, min, max) => {
  const res = []
  const count = new Array(max - min + 1).fill(0)
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++
  }
  count[0] -= 1
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    res[count[arr[i] - min]] = arr[i]
    count[arr[i] - min]--
  }
  return res
}
