function sortNumbers(items) {
  const result = Array.from(items);
  let last = result.length - 1;

  while (last > 0) {
    let swapped = false;
    for (let position = 0; position < last; position += 1) {
      if (result[position] > result[position + 1]) {
        const temporary = result[position];
        result[position] = result[position + 1];
        result[position + 1] = temporary;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    last -= 1;
  }
  return result;
}

console.log(sortNumbers([5, 1, 4, 2, 8]));
