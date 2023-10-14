from __future__ import annotations

RADIX = 10


def radix_sort(list_of_ints: list[int]) -> list[int]:
    placement = 1
    max_digit = max(list_of_ints)
    while placement <= max_digit:
        buckets: list[list] = [[] for _ in range(RADIX)]
        for i in list_of_ints:
            tmp = int((i / placement) % RADIX)
            buckets[tmp].append(i)
        a = 0
        for b in range(RADIX):
            for i in buckets[b]:
                list_of_ints[a] = i
                a += 1
        placement *= RADIX
    return list_of_ints


if __name__ == "__main__":
    import doctest

    doctest.testmod()
