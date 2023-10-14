const alphaNumericalSort = (a, b) => {
  return a.localeCompare(b, undefined, { numeric: true })
}

export { alphaNumericalSort }
