function combSort(list) {
  if (list.length === 0) {
    return list
  }
  const shrink = 1.3
  let gap = list.length
  let isSwapped = true
  let i = 0

  while (gap > 1 || isSwapped) {
    gap = parseInt(parseFloat(gap) / shrink, 10)

    isSwapped = false
    i = 0

    while (gap + i < list.length) {
      if (list[i] > list[i + gap]) {
        ;[list[i], list[i + gap]] = [list[i + gap], list[i]]
        isSwapped = true
      }
      i += 1
    }
  }
  return list
}

export { combSort }
