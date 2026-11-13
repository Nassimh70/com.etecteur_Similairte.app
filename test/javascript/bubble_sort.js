function bubbleSort(values) {
  const numbers = [...values];
  for (let end = numbers.length - 1; end > 0; end -= 1) {
    for (let index = 0; index < end; index += 1) {
      if (numbers[index] > numbers[index + 1]) {
        [numbers[index], numbers[index + 1]] = [
          numbers[index + 1],
          numbers[index],
        ];
      }
    }
  }
  return numbers;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
