def sort_numbers(items):
    result = list(items)
    last = len(result) - 1

    while last > 0:
        swapped = False
        for position in range(last):
            if result[position] > result[position + 1]:
                result[position], result[position + 1] = (
                    result[position + 1],
                    result[position],
                )
                swapped = True
        if not swapped:
            break
        last -= 1
    return result


values = [5, 1, 4, 2, 8]
print(sort_numbers(values))
