def bead_sort(sequence: list) -> list:
    if any(not isinstance(x, int) or x < 0 for x in sequence):
        raise TypeError("Sequence must be list of non-negative integers")
    for _ in range(len(sequence)):
        for i, (rod_upper, rod_lower) in enumerate(zip(sequence, sequence[1:])):
            if rod_upper > rod_lower:
                sequence[i] -= rod_upper - rod_lower
                sequence[i + 1] += rod_upper - rod_lower
    return sequence


if __name__ == "__main__":
    assert bead_sort([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5]
    assert bead_sort([7, 9, 4, 3, 5]) == [3, 4, 5, 7, 9]
