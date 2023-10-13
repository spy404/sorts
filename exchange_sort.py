def exchange_sort(numbers: list[int]) -> list[int]:
    numbers_length = len(numbers)
    for i in range(numbers_length):
        for j in range(i + 1, numbers_length):
            if numbers[j] < numbers[i]:
                numbers[i], numbers[j] = numbers[j], numbers[i]
    return numbers


if __name__ == "__main__":
    user_input = input("Enter numbers separated by a comma:\n").strip()
    unsorted = [int(item) for item in user_input.split(",")]
    print(exchange_sort(unsorted))
