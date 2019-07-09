// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair.
// For example, `car(cons(3, 4))` returns 3, and `cdr(cons(3, 4))` returns 4.
//
// Given this implementation of cons:
// def cons(a, b):
//   def pair(f):
//     return f(a, b)
//   return pair
//
// Implement `car` and `cdr`.

function cons(a, b) {
  return function(fn) {
    return fn(a, b);
  };
}

function car(fn) {
  return fn(a => a);
}

function cdr(fn) {
  return fn((a, b) => b);
}

test.each`
  a    | b    | expected
  ${3} | ${4} | ${3}
`("CAR returns $expected given the pair [$a and $b]", ({ a, b, expected }) => {
  expect(car(cons(3, 4))).toBe(expected);
});

test.each`
  a    | b    | expected
  ${3} | ${4} | ${4}
`("CDR returns $expected given the pair [$a and $b]", ({ a, b, expected }) => {
  expect(cdr(cons(3, 4))).toBe(expected);
});
