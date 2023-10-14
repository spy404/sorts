def stooge_sort(arr: list[int]) -> list[int]:
    stooge(arr, 0, len(arr) - 1)
    return arr


def stooge(arr: list[int], i: int, h: int) -> None:
    if i >= h:
        return

    if arr[i] > arr[h]:
        arr[i], arr[h] = arr[h], arr[i]

    if h - i + 1 > 2:
        t = (int)((h - i + 1) / 3)

        stooge(arr, i, (h - t))

        stooge(arr, i + t, (h))

        stooge(arr, i, (h - t))


if __name__ == "__main__":
    user_input = input("Enter numbers separated by a comma:\n").strip()
    unsorted = [int(item) for item in user_input.split(",")]
    print(stooge_sort(unsorted))
