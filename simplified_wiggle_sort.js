import { quickSelectSearch } from '../Search/QuickSelectSearch.js'

export const simplifiedWiggleSort = function (arr) {
  let median = quickSelectSearch(arr, Math.floor(arr.length / 2.0))
  median = median[Math.floor(arr.length / 2.0)]

  const sorted = new Array(arr.length)

  let smallerThanMedianIndx = 0
  let greaterThanMedianIndx = arr.length - 1 - (arr.length % 2)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > median) {
      sorted[greaterThanMedianIndx] = arr[i]
      greaterThanMedianIndx -= 2
    } else {
      if (smallerThanMedianIndx < arr.length) {
        sorted[smallerThanMedianIndx] = arr[i]
        smallerThanMedianIndx += 2
      } else {
        sorted[greaterThanMedianIndx] = arr[i]
        greaterThanMedianIndx -= 2
      }
    }
  }

  return sorted
}
