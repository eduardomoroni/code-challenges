const twoSum = (array, targetSum) => {
  let hashMap = {};
  let results = [];

  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    const desiredElement = hashMap[number];

    if (desiredElement) {
      results.push([desiredElement, number]);
    } else {
      hashMap[targetSum - number] = number;
    }
  }

  return results;
};
