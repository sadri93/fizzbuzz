import { Console } from "console";
import { fizzBuzz } from "./utils";

describe("fizzBuzz", () => {
  test("fizzBuzz is array", () => {
    const result = fizzBuzz(100);
    expect(Array.isArray(result)).toBe(true);
  });
  test("fizzBuzz is array", () => {
    const arrayLength = 300;
    const result = fizzBuzz(arrayLength);
    expect(result.length).toBe(arrayLength);
  });
  test("array contain fizz buzz", () => {
    const arrayLength = 6;
    const result = fizzBuzz(arrayLength);
    expect(result.includes("buzz")).toBe(true);
    expect(result.includes("fizz")).toBe(true);
  });
});
