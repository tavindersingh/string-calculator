export function addNumbers(numbers: string) {
  if (numbers.length == 0) {
    return 0;
  }

  if (numbers.includes(",")) {
    const tokens: string[] = numbers.split(",");

    let sum = 0;

    console.log(tokens);

    tokens.forEach((token) => (sum += parseInt(token)));

    return sum;
  }

  return parseInt(numbers);
}
