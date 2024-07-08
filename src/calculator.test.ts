import { addNumbers } from "./calculator";

describe("Calculator functions", () => {
  it("should return 0 on empty string", () => {
    expect(addNumbers("")).toEqual(0);
  });

  it("should return the number when single number is passed", () => {
    expect(addNumbers("5")).toEqual(5);
  });
});
