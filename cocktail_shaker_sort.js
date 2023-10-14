export function cocktailShakerSort(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j

    for (j = items.length - 1; j > i; j--) {
      if (items[j] < items[j - 1]) {
        ;[items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }

    for (j = 0; j < i; j++) {
      if (items[j] > items[j + 1]) {
        ;[items[j], items[j + 1]] = [items[j + 1], items[j]]
      }
    }
  }

  return items
}
