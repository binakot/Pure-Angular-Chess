/**
 * Convert number to letter.
 * For example, 1 -> a, 2 -> b, etc...
 *
 * @param num Input number value.
 * @param upper Return in uppercase otherwise lowercase.
 */
export function numberToLetter(num: number, upper = false): string {
  if (num < 1 || num > 26) {
    throw new Error(`Number of letter is out of range: ${num}`);
  }
  const letter = String.fromCharCode(96 + num);
  return upper ? letter.toUpperCase() : letter;
}

/**
 * Convert letter to number.
 * For example, a -> 1, b -> 2, etc...
 *
 * @param letter Input string value.
 */
export function letterToNumber(letter: string): number {
  if (letter.length !== 1) {
    throw new Error(`String must contains single letter only: ${letter}`);
  }
  return letter.toLowerCase().charCodeAt(0) - 96;
}
