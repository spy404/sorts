export function beadSort(sequence) {
  if (sequence.some((integer) => integer < 0)) {
    throw RangeError('Sequence must be a list of Positive integers Only!')
  }

  const sequenceLength = sequence.length
  const max = Math.max(...sequence)

  const grid = sequence.map((number) => {
    const maxArr = new Array(max)

    for (let i = 0; i < number; i++) {
      maxArr[i] = '*'
    }

    return maxArr
  })

  for (let col = 0; col < max; col++) {
    let beadsCount = 0

    for (let row = 0; row < sequenceLength; row++) {
      if (grid[row][col] === '*') {
        beadsCount++
      }
    }

    for (let row = sequenceLength - 1; row > -1; row--) {
      if (beadsCount) {
        grid[row][col] = '*'
        beadsCount--
      } else {
        grid[row][col] = undefined
      }
    }
  }

  return grid.map((beadArray) => {
    const beadsArray = beadArray.filter((bead) => bead === '*')
    return beadsArray.length
  })
}
