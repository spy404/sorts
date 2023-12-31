export function pigeonHoleSort(arr) {
  let min = arr[0]
  let max = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    }
    if (arr[i] < min) {
      min = arr[i]
    }
  }

  const range = max - min + 1
  const pigeonhole = Array(range).fill(0)

  for (let i = 0; i < arr.length; i++) {
    pigeonhole[arr[i] - min]++
  }

  let index = 0

  for (let j = 0; j < range; j++) {
    while (pigeonhole[j]-- > 0) {
      arr[index++] = j + min
    }
  }
  return arr
}
