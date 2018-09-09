const someFunction = () => {
  return 'bar';
};

const someAsyncFunction = async fetch => {
  return fetch('someUrl');
};

module.exports = {
  someFunction,
  someAsyncFunction,
};
