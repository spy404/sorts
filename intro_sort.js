function introsort(array, compare) {
  const defaultComparator = function (x, y) {
    if (x === undefined && y === undefined) return 0
    if (x === undefined) return 1
    if (y === undefined) return -1
    const xString = toString(x)
    const yString = toString(y)
    if (xString < yString) return -1
    if (xString > yString) return 1
    return 0
  }
  const toString = function (obj) {
    if (obj === null) return 'null'
    if (typeof obj === 'boolean' || typeof obj === 'number') {
      return obj.toString()
    }
    if (typeof obj === 'string') return obj
    if (typeof obj === 'symbol') throw new TypeError()
    return obj.toString()
  }
  if (Array.isArray(array) === false) {
    return
  }
  if (typeof compare !== 'function') {
    compare = defaultComparator
  }
  return (function (array, comparator) {
    const swap = function (index1, index2) {
      const temp = array[index1]
      array[index1] = array[index2]
      array[index2] = temp
    }
    const THRESHOLD = 16
    const TUNEMAXDEPTH = 1
    const len = array.length
    if (len === 1) {
      return
    }
    const maxDepth = Math.floor(Math.log2(len)) * TUNEMAXDEPTH
    quickSort(0, len, maxDepth)
    insertionSort(0, len)
    function quickSort(start, last, depth) {
      if (last - start <= THRESHOLD) {
        insertionSort(start, last)
        return
      } else if (depth <= 0) {
        heapSort(start, last)
        return
      }
      let pivot = (last + start) >> 1
      pivot = partition(start, last, pivot)
      quickSort(start, pivot, depth - 1)
      quickSort(pivot + 1, last, depth - 1)
    }
    function partition(start, last, pivot) {
      swap(start, pivot)
      pivot = start
      let lo = start
      let hi = last
      while (true) {
        lo++
        while (comparator(array[lo], array[pivot]) <= 0 && lo !== last) {
          lo++
        }
        hi--
        while (comparator(array[hi], array[pivot]) > 0 && hi !== start) {
          hi--
        }
        if (lo >= hi) {
          break
        }
        swap(lo, hi)
      }
      swap(start, hi)
      return hi
    }
    function insertionSort(start, last) {
      let i, j
      for (i = start + 1; i < last; i++) {
        j = i - 1
        while (j >= 0 && comparator(array[j], array[j + 1]) > 0) {
          swap(j, j + 1)
          j--
        }
      }
    }
    function heapSort(start, last) {
      let x = (last + start) >> 1
      while (x - start >= 0) {
        heapify(x, start, last)
        x--
      }
      x = last - 1
      while (x - start > 0) {
        swap(start, x)
        heapify(start, start, x)
        x--
      }
    }
    function heapify(cur, start, last) {
      const size = last - start
      let max, lt, rt
      cur = cur - start
      while (true) {
        max = cur
        lt = 2 * max + 1
        rt = 2 * max + 2
        if (
          lt < size &&
          comparator(array[start + max], array[start + lt]) < 0
        ) {
          max = lt
        }
        if (
          rt < size &&
          comparator(array[start + max], array[start + rt]) < 0
        ) {
          max = rt
        }
        if (max !== cur) {
          swap(start + cur, start + max)
          cur = max
        } else {
          break
        }
      }
    }
  })(array, compare)
}

function demo1() {
  const data = []
  const size = 1000000
  let i = 0
  let temp
  const c = function (a, b) {
    return a - b
  }
  for (i = 0; i < size; i++) {
    temp = Math.random() * Number.MAX_SAFE_INTEGER
    data.push(temp)
  }
  introsort(data, c)
  let faulty = false
  for (i = 1; i < size; i++) {
    if (data[i] < data[i - 1]) {
      faulty = true
      break
    }
  }
  if (faulty) {
    return 'WRONG!!'
  } else {
    return 'RIGHT:)'
  }
}

function demo2() {
  const data = []
  const data2 = []
  const size = 1000000
  let i = 0
  let temp
  for (i = 0; i < size; i++) {
    temp = Math.random() * Number.MAX_SAFE_INTEGER
    data.push(temp)
    data2.push(temp)
  }
  introsort(data)
  data2.sort()
  let faulty = false
  for (i = 1; i < size; i++) {
    if (data[i] !== data2[i]) {
      faulty = true
      break
    }
  }
  if (faulty) {
    return 'WRONG Implemented Comparator!!'
  } else {
    return 'Comparator Works Fine:)'
  }
}

export { introsort, demo1, demo2 }
