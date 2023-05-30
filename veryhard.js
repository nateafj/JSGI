function lowestCoins(arr, amount) {
    
    arr.sort((a, b) => b - a);
    let coins = new Map();
    let addedCoins = {
      numCoins: 0,
      mapOfTypes: new Map(),
    };
  
    let i = 0;
    while (amount > 0 && i < arr.length) {
      let coin = arr[i];
      if (amount >= coin) {
        let val = coins.get(coin) ? coins.get(coin) + 1 : 1;
        coins.set(coin, val);
        addedCoins.numCoins++;
        addedCoins.mapOfTypes.set(coin, coin + " used " + val + " time(s)");
        amount -= coin;
      } else {
        i++;
      }
    }
    if (amount === 0) {
      console.log(addedCoins.mapOfTypes);
      return addedCoins.numCoins;
    } else {
      return -1;
    }
}
console.log(lowestCoins([1,5,10,25], 21))