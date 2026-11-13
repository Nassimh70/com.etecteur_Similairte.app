function fibonacci(count) {
  const sequence = [];
  let previous = 0;
  let current = 1;

  for (let index = 0; index < count; index += 1) {
    sequence.push(previous);
    [previous, current] = [current, previous + current];
  }
  return sequence;
}

console.log(fibonacci(8));
