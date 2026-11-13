def fibonacci(count):
    sequence = []
    previous, current = 0, 1
    for _ in range(count):
        sequence.append(previous)
        previous, current = current, previous + current
    return sequence


print(fibonacci(8))
