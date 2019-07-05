// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function sumK(numbers, k) {
  const complements = new Set();

  for (let number of numbers) {
    const complement = number - k;

    if (complements.has(-number)) {
      return true;
    } else {
      complements.add(complement);
    }
  }

  return false;
}

test.each`
  numbers           | k     | expected
  ${[10, 15, 3, 7]} | ${17} | ${true}
  ${[1, 2]}         | ${3}  | ${true}
  ${[1, 2, 0]}      | ${1}  | ${true}
  ${[]}             | ${10} | ${false}
  ${[2, 2, 2, 2]}   | ${0}  | ${false}
  ${[2, 2, 2, 2]}   | ${2}  | ${false}
  ${[0, 0, 0, 0]}   | ${0}  | ${true}
`("returns $expected when $numbers and $k", ({ numbers, k, expected }) => {
  expect(sumK(numbers, k)).toBe(expected);
});
