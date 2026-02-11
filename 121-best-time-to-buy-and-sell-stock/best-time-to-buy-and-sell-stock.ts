function maxProfit(prices: number[]): number {
    let buy_idx = 0;
    let sell_idx = 1;
    let profit = 0;

    while(sell_idx < prices.length) {
        if (prices[sell_idx] > prices[buy_idx]) {
            profit = Math.max(profit, prices[sell_idx] - prices[buy_idx])
        } else {
            buy_idx = sell_idx;
        }
        sell_idx++;
    }
    return profit;
};