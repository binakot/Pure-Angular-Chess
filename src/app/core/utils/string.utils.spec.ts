import { numberToLetter } from "./string.utils";

describe('numberToLetter', () => {
  it('should return a from 1', () => {
    expect(numberToLetter(1)).toBe("a");
  });

  it('should return A from 1 with upper flag', () => {
    expect(numberToLetter(1, true)).toBe("A");
  });

  it('should return z from 26', () => {
    expect(numberToLetter(26)).toBe("z");
  });

  it('should return Z from 26 with upper flag', () => {
    expect(numberToLetter(26, true)).toBe("Z");
  });

  it('should use lowercase by default', () => {
    expect(numberToLetter(1)).toBe(numberToLetter(1, false));
  });

  it('should throw error on out of range below 1', () => {
    expect(() => numberToLetter(0)).toThrow(new Error("Number of letter is out of range: 0"));
  });

  it('should throw error on out of range higher 26', () => {
    expect(() => numberToLetter(27)).toThrow(new Error("Number of letter is out of range: 27"));
  });
});
