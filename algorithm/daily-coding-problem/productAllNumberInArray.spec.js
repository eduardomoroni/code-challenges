// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
// Follow-up: what if you can't use division?

function productArray(array = []) {
  const productArray = [];
  const product = array.reduce((number, acc) => number * acc, 1);

  array.forEach(number => {
    if (number === 0) {
      productArray.push(0);
    } else {
      productArray.push(product / number);
    }
  });

  return productArray;
}

test.each`
  array                 | expected
  ${[1, -2, 3, -4, -5]} | ${[-120, 60, -40, 30, 24]}
  ${[1, 2, 3, 4, 5]}    | ${[120, 60, 40, 30, 24]}
  ${[3, 2, 1]}          | ${[2, 3, 6]}
  ${[0]}                | ${[0]}
  ${[0, 1, 1]}          | ${[0, 0, 0]}
  ${[1, 1, 1]}          | ${[1, 1, 1]}
  ${[]}                 | ${[]}
`("returns $expected when array is $array", ({ array, expected }) => {
  expect(productArray(array)).toEqual(expected);
});
