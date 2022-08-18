function solution(number) {
  try {
    return [...Array(number).keys()]
      .filter((value) => value % 3 === 0 || value % 5 === 0)
      .reduce((sum, current) => sum + current, 0);
  } catch (error) {
    return 0;
  }
}
