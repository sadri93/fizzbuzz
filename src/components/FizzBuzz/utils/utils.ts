import { FIZZ, BUZZ } from "../enum";

export const fizzBuzz = (size: number) => {
  const arr = new Array(size).fill(0).map((_, i) => {
    let returnedValue = "";
    if (i % 3 === 0 && i !== 0) {
      returnedValue = FIZZ;
    } else if (i % 5 === 0 && i !== 0) {
      returnedValue = BUZZ;
    } else {
      returnedValue = i.toString();
    }

    return returnedValue;
  });
  return arr;
};
