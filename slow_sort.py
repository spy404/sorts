from __future__ import annotations


def slowsort(sequence: list, start: int | None = None, end: int | None = None) -> None:
    if start is None:
        start = 0

    if end is None:
        end = len(sequence) - 1

    if start >= end:
        return

    mid = (start + end) // 2

    slowsort(sequence, start, mid)
    slowsort(sequence, mid + 1, end)

    if sequence[end] < sequence[mid]:
        sequence[end], sequence[mid] = sequence[mid], sequence[end]

    slowsort(sequence, start, end - 1)


if __name__ == "__main__":
    from doctest import testmod

    testmod()
