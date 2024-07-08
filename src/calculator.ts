export function addNumbers(numbers: string) {
  if (numbers.length == 0) {
    return 0;
  }

  if (numbers.includes(",")) {
    const tokens: string[] = numbers.split(",");

    return parseInt(tokens[0]) + parseInt(tokens[1]);
  }

  return parseInt(numbers);
}
