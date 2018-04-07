//SOLUTION
const conversionMap = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
const isValidRoman = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
const romanNumerals = /CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I/g;
const toDecimal = (acc, roman) => acc + conversionMap[roman];
const romanToDecimal = (input) => input.match(romanNumerals).reduce(toDecimal, 0);
const solution = (input) => isValidRoman.test(input) ? romanToDecimal(input) : undefined;

//TEST CASES
Test.expect(solution('Z') === undefined, 'Z should be undefined')
Test.expect(solution('MMXVIII') === 2018, 'MMXVIII should be 2018')
Test.expect(solution('XXV') === 25, 'XXV should be 25')
Test.expect(solution('MDCLXVI') === 1666, 'MDCLXVI should be 1666')
Test.expect(solution('IV') === 4, 'IV should be 4')
Test.expect(solution('III') === 3, 'III should be 3')

