def bubble_sort(values):
    numbers = values[:]
    for end in range(len(numbers) - 1, 0, -1):
        for index in range(end):
            if numbers[index] > numbers[index + 1]:
                numbers[index], numbers[index + 1] = (
                    numbers[index + 1],
                    numbers[index],
                )
    return numbers


data = [5, 1, 4, 2, 8]
print(bubble_sort(data))
