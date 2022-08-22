//Cheking if one array if sublist to another.

class List {
  constructor(array) {
    this._array = array || [];
  }

  compare(obj) {
    let list1 = this._array.toString();
    let list2 = obj._array.toString();

    if (list1 === list2) return "EQUAL";
    if (list2.includes(list1)) return "SUBLIST";
    if (list1.includes(list2)) return "SUPERLIST";
    return "UNEQUAL";
  }

}

const listOne = new List([1, 2, 3]);
const listTwo = new List([1, 2, 3 ,5]);

console.log(listOne.compare(listTwo));
