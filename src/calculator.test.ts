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
});
