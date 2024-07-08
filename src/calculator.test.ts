import { addNumbers } from "./calculator";

describe("Calculator functions", () => {
  it("should return 0 on empty string", () => {
    expect(addNumbers("")).toEqual(0);
  });

  it("should return the number when single number is passed", () => {
    expect(addNumbers("5")).toEqual(5);
  });

  it("should return the sum of two numbers delimited by comma", () => {
    expect(addNumbers("4,5")).toEqual(9);
  });

  it("should return sum on multiple numbers", () => {
    expect(addNumbers("1,2,3")).toEqual(6);
  });

  it("should accept newline as valid delimiter", () => {
    expect(addNumbers("1,2\n3")).toEqual(6);
  });

  it("should accept custom delimiter syntax", () => {
    expect(addNumbers("//;\n1;2;3")).toEqual(6);
  });

  it("should raise exception on negative numbers", () => {
    expect(() => addNumbers("1,2,-3")).toThrow();
  });

  it("exception message should contains negative numbers", () => {
    expect(() => addNumbers("1,2,-3,-4")).toThrow(
      "Negative numbers not allowed: -3,-4"
    );
  });

  it("should ignore numbers more than 1000", () => {
    expect(addNumbers("//;\n1;2;3;1001")).toEqual(6);
  });

  it("should accept single delimiter of any length", () => {
    expect(addNumbers("//[***]\n1***2***3")).toEqual(6);
  });
});
