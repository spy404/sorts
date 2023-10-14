def quick_sort_3partition(sorting: list, left: int, right: int) -> None:
    if right <= left:
        return
    a = i = left
    b = right
    pivot = sorting[left]
    while i <= b:
        if sorting[i] < pivot:
            sorting[a], sorting[i] = sorting[i], sorting[a]
            a += 1
            i += 1
        elif sorting[i] > pivot:
            sorting[b], sorting[i] = sorting[i], sorting[b]
            b -= 1
        else:
            i += 1
    quick_sort_3partition(sorting, left, a - 1)
    quick_sort_3partition(sorting, b + 1, right)


def quick_sort_lomuto_partition(sorting: list, left: int, right: int) -> None:
    if left < right:
        pivot_index = lomuto_partition(sorting, left, right)
        quick_sort_lomuto_partition(sorting, left, pivot_index - 1)
        quick_sort_lomuto_partition(sorting, pivot_index + 1, right)


def lomuto_partition(sorting: list, left: int, right: int) -> int:
    pivot = sorting[right]
    store_index = left
    for i in range(left, right):
        if sorting[i] < pivot:
            sorting[store_index], sorting[i] = sorting[i], sorting[store_index]
            store_index += 1
    sorting[right], sorting[store_index] = sorting[store_index], sorting[right]
    return store_index


def three_way_radix_quicksort(sorting: list) -> list:
    if len(sorting) <= 1:
        return sorting
    return (
        three_way_radix_quicksort([i for i in sorting if i < sorting[0]])
        + [i for i in sorting if i == sorting[0]]
        + three_way_radix_quicksort([i for i in sorting if i > sorting[0]])
    )


if __name__ == "__main__":
    import doctest

    doctest.testmod(verbose=True)

    user_input = input("Enter numbers separated by a comma:\n").strip()
    unsorted = [int(item) for item in user_input.split(",")]
    quick_sort_3partition(unsorted, 0, len(unsorted) - 1)
    print(unsorted)
