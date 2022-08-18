function squareSum(numbers) {
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue ** 2,
    0
  );
}
