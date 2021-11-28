import { formatDate } from "./helpers";

describe("formatDate", () => {
  it("should return a string", () => {
    expect(typeof formatDate(new Date())).toBe("string");
  });
  it("should return a string with the correct format", () => {
    const date = new Date(2017, 11, 28, 22, 35);
    expect(formatDate(date)).toBe("December 28, 2017 at 22:35");
  });
});
