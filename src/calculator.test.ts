import { addNumbers } from "./calculator";

describe("Calculator functions", () => {
  it("should return 0 on empty string", () => {
    expect(addNumbers("")).toEqual(0);
  });
});
