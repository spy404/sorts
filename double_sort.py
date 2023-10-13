def double_sort(lst):
    no_of_elements = len(lst)
    for _ in range(
        int(((no_of_elements - 1) / 2) + 1)
    ):
        for j in range(no_of_elements - 1):
            if (
                lst[j + 1] < lst[j]
            ):
                temp = lst[j + 1]
                lst[j + 1] = lst[j]
                lst[j] = temp
            if (
                lst[no_of_elements - 1 - j] < lst[no_of_elements - 2 - j]
            ):
                temp = lst[no_of_elements - 1 - j]
                lst[no_of_elements - 1 - j] = lst[no_of_elements - 2 - j]
                lst[no_of_elements - 2 - j] = temp
    return lst


if __name__ == "__main__":
    print("enter the list to be sorted")
    lst = [int(x) for x in input().split()]
    sorted_lst = double_sort(lst)
    print("the sorted list is")
    print(sorted_lst)
