def pancake_sort(arr):
    cur = len(arr)
    while cur > 1:
        mi = arr.index(max(arr[0:cur]))
        arr = arr[mi::-1] + arr[mi + 1 : len(arr)]
        arr = arr[cur - 1 :: -1] + arr[cur : len(arr)]
        cur -= 1
    return arr


if __name__ == "__main__":
    user_input = input("Enter numbers separated by a comma:\n").strip()
    unsorted = [int(item) for item in user_input.split(",")]
    print(pancake_sort(unsorted))
