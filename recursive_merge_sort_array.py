def merge(arr: list[int]) -> list[int]:
    if len(arr) > 1:
        middle_length = len(arr) // 2
        left_array = arr[
            :middle_length
        ]
        right_array = arr[
            middle_length:
        ]
        left_size = len(left_array)
        right_size = len(right_array)
        merge(left_array)
        merge(right_array)
        left_index = 0
        right_index = 0
        index = 0
        while (
            left_index < left_size and right_index < right_size
        ):
            if left_array[left_index] < right_array[right_index]:
                arr[index] = left_array[left_index]
                left_index += 1
            else:
                arr[index] = right_array[right_index]
                right_index += 1
            index += 1
        while (
            left_index < left_size
        ):
            arr[index] = left_array[left_index]
            left_index += 1
            index += 1
        while (
            right_index < right_size
        ):
            arr[index] = right_array[right_index]
            right_index += 1
            index += 1
    return arr


if __name__ == "__main__":
    import doctest

    doctest.testmod()
