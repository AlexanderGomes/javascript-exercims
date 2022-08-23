//the flatMap method returns a new array based on the called back you pass to it
//on this case the call back was the isArray() method which removes all the nesting
//inside of the array, and the second step which was to remove null/undefined values
// if isArray(v) returns true, you want to give back the flatnned array, if it returns
//false is because there's null/undefined values in the array, so you want to remove it
// which you do by grabbing the v from the flatMap() and using the nullish operator
//to check if any value in the array is undefined/null if it's you just return the array

function flatten(arr) {
    return arr.flatMap(v => Array.isArray(v) ? flatten(v) : v ?? []
    );
}

//regardless how many nested arrays, undefined or null values the function will
//always return an flattenned array.
console.log(flatten([1, 2, 4, [3, 4 ,5], [[[[[3, 4 ,5 ,6]]]]], [undefined], [[null]]]))