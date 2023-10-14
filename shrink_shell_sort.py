def shell_sort(collection: list) -> list:
    gap = len(collection)

    shrink = 1.3

    while gap > 1:
        gap = int(gap / shrink)

        for i in range(gap, len(collection)):
            temp = collection[i]
            j = i
            while j >= gap and collection[j - gap] > temp:
                collection[j] = collection[j - gap]
                j -= gap
            collection[j] = temp

    return collection


if __name__ == "__main__":
    import doctest

    doctest.testmod()
