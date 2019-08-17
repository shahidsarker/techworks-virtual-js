// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Say you have an array for which the i-th element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

var maxProfit = function(prices) {
  // track the difference between two days as profit
  let trackedProfit = 0;
  // looping over each price
  for (let i = 0; i < prices.length; i++) {
    const currentValue = prices[i];
    // loop through the rest of the array and compare to current value
    for (let j = i + 1; j < prices.length; j++) {
      const compValue = prices[j];
      const newProfit = compValue - currentValue;
      if (newProfit > trackedProfit) {
        trackedProfit = newProfit;
      }
    }
  }
  return trackedProfit;
};

const exampleOne = [7, 1, 5, 3, 6, 4];

maxProfit(exampleOne); // 5
