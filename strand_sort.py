import operator


def strand_sort(arr: list, reverse: bool = False, solution: list | None = None) -> list:
    _operator = operator.lt if reverse else operator.gt
    solution = solution or []

    if not arr:
        return solution

    sublist = [arr.pop(0)]
    for i, item in enumerate(arr):
        if _operator(item, sublist[-1]):
            sublist.append(item)
            arr.pop(i)

    if not solution:
        solution.extend(sublist)
    else:
        while sublist:
            item = sublist.pop(0)
            for i, xx in enumerate(solution):
                if not _operator(item, xx):
                    solution.insert(i, item)
                    break
            else:
                solution.append(item)

    strand_sort(arr, reverse, solution)
    return solution


if __name__ == "__main__":
    assert strand_sort([4, 3, 5, 1, 2]) == [1, 2, 3, 4, 5]
    assert strand_sort([4, 3, 5, 1, 2], reverse=True) == [5, 4, 3, 2, 1]
