from __future__ import annotations


def bucket_sort(my_list: list, bucket_count: int = 10) -> list:
    if len(my_list) == 0 or bucket_count <= 0:
        return []

    min_value, max_value = min(my_list), max(my_list)
    bucket_size = (max_value - min_value) / bucket_count
    buckets: list[list] = [[] for _ in range(bucket_count)]

    for val in my_list:
        index = min(int((val - min_value) / bucket_size), bucket_count - 1)
        buckets[index].append(val)

    return [val for bucket in buckets for val in sorted(bucket)]


if __name__ == "__main__":
    from doctest import testmod

    testmod()
    assert bucket_sort([4, 5, 3, 2, 1]) == [1, 2, 3, 4, 5]
    assert bucket_sort([0, 1, -10, 15, 2, -2]) == [-10, -2, 0, 1, 2, 15]
