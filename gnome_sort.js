export function gnomeSort(items) {
  if (items.length <= 1) {
    return
  }

  let i = 1

  while (i < items.length) {
    if (items[i - 1] <= items[i]) {
      i++
    } else {
      ;[items[i], items[i - 1]] = [items[i - 1], items[i]]

      i = Math.max(1, i - 1)
    }
  }
  return items
}
