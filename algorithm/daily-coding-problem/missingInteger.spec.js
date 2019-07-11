// Given an array of integers, find the first missing positive integer in linear time and constant space.
// In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

// [3, 4, -1, 1]

function findMissingInteger(array) {
  let shift = segregate(array);
  let arr2 = array.slice(shift);

  markVisited(arr2);

  return findMissingPositive(arr2);
}

test.each`
  array                          | expected
  ${[3, 4, -1, 1]}               | ${2}
  ${[1, 2, 0]}                   | ${3}
  ${[1, -1, -5, -3, 3, 4, 2, 8]} | ${5}
  ${[-3, -1, -2]}                | ${1}
  ${[10, 8, 5]}                  | ${1}
  ${[0]}                         | ${1}
  ${[-1]}                        | ${1}
`("returns $expected when array is $array", ({ array, expected }) => {
  expect(findMissingInteger(array)).toEqual(expected);
});

function segregate(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      let temp;
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      j++;
    }
  }

  return j;
}

function findMissingPositive(arr) {
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    if (arr[i] > 0) {
      return i + 1;
    }
  }

  return size + 1;
}

function markVisited(arr) {
  const size = arr.length;

  for (let i = 0; i < size; i++) {
    let x = Math.abs(arr[i]);

    if (x - 1 < size && arr[x - 1] > 0) {
      arr[x - 1] = -arr[x - 1];
    }
  }
}
