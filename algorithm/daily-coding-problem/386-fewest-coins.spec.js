/*
*

You are given an array of integers representing coin denominations and a total amount of money. Write a function to compute the fewest number of coins needed to make up that amount. If it is not possible to make that amount, return null.

For example, given an array of [1, 5, 10] and an amount 56, return 7 since we can use 5 dimes, 1 nickel, and 1 penny.

Given an array of [5, 8] and an amount 15, return 3 since we can use 5 5-cent coins.

* */

function auxiliary(amount, coinsAvailable, dp) {
  let coins = null;

  if (amount < 0) {
    coins = null;
  } else if (amount === 0) {
    coins = 0;
  } else {
    coinsAvailable.forEach(coin => {
      const dpElement = dp[amount - coin];

      if (Number.isInteger(dpElement)) {
        coins = dpElement + 1;
      }
    });
  }

  dp[amount] = coins;
  return coins;
}

//considering `coinsAvailable` is sorted;
function fewestCoin(coinsAvailable, amount) {
  let dp = {};

  for (let i = 0; i <= amount; i++) {
    auxiliary(i, coinsAvailable, dp);
  }

  return dp[amount];
}

it("should work", function() {
  expect(fewestCoin([5, 8], 15)).toEqual(3);
  expect(fewestCoin([1, 5, 10], 56)).toEqual(7);
});
