class Change {
  calculate(coinArray, target) {
    //check the edge cases no negative numbers and no 0
    if (target < 0) {
      throw "Negative totals are not allowed.";
    }

    //create an empty array to store the coins
    const change = [[]];

    //loop through the coin array and check if the target is equal to the coin value
    for (let i = 0; i < target; ++i) {
      coinArray.map((coin) => {
        const cs = [...change[i], coin];
        console.log(cs);
      if (!change[coin + i] || cs.length < change[coin + i].length) {
          change[coin + i] = cs
        }
      });

    }

    //check if the change is possible
    if (!change[target]) {
      throw `The total ${target} cannot be represented in the given currency.`;
    }

    return change[target];
  }
}


const change = new Change();
console.log(change.calculate([1, 2, 9, 5], 20));





