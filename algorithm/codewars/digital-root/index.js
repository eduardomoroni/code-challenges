const toDigitalRoot = (acc, number) => acc + Number(number);
const sumAllDigits = n =>
  String(n)
    .split("")
    .reduce(toDigitalRoot, 0);
const digital_root = n => (n < 10 ? n : digital_root(sumAllDigits(n)));
