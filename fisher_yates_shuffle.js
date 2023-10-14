export const shuffle = (array) => {
  let maxLength = array.length
  let temp
  let idx

  while (maxLength) {
    idx = Math.floor(Math.random() * maxLength--)

    temp = array[maxLength]
    array[maxLength] = array[idx]
    array[idx] = temp
  }

  return array
}
