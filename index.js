// ALLERGY EXERCISE// //BITWISE OPERATOR WAS THE LESSON OF THIS EXERCISE//

// Instructions //

// Given a person's allergy score, determine whether or not they're allergic to a given item, and their full list of allergies.

// An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

// The list of items (and their value) that were tested are:

// eggs (1)
// peanuts (2)
// shellfish (4)
// strawberries (8)
// tomatoes (16)
// chocolate (32)
// pollen (64)
// cats (128)
// So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

// Now, given just that score of 34, your program should be able to say:

// Whether Tom is allergic to any one of those allergens listed above.
// All the allergens Tom is allergic to.
// Note: a given score may include allergens not listed above (i.e. allergens that score 256, 512, 1024, etc.). Your program should ignore those components of the score. For example, if the allergy score is 257, your program should only report the eggs (1) allergy for exempla.



// // Explanation // //

// Number 1//create an object with all the food and their scores

const ALLERGENS = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  }

// Number 2 // just like was said at the instructions, the test will produce a numeric score which will match an allergy.
// based on that your Allergies class will recieve the score, so thats the only thing you pass to your constructor.
class Allergies {
  
    constructor(score) {
      this.score = score;
    }

    // Number 4 //
    //after creating the allergicTo function now all you have to do is return the list of allergies 
    // get all the keys of your object which is the name of the foods, then you filter and pass the 
    //allergicTo function to it so you can return only the list of food that matches with the function.

    //at the function itself you only return true or false because of the !! operator
    //but here you're returning the Object keys first, filtering based on the allergicTo function.
    //which will return the keys that matches with the value being passed to the Allergies() class
    list() {
      return Object.keys(ALLERGENS).filter(allergy => this.allergicTo(allergy));
    }
    
    // Number 3 //
    //Now you will create an function that will check what the person is allergic to, which should return true or false//
    // using a logical operator like !! is the best option//
    // the function will take the allergy as the params and check if the score that is being passed to the Allergies class matches
    // with any of the values of the Object ALLERGENS, both !! and & are the ones you should pay attention to in this function.
    // the !! will check if what's being passed inside of the () is true or false based on if the score matchs with any of the allergies.
    // this comparision is being made by the & operator, which is a bitwise operator 

    //in simple terms based on the number you pass to Allergies(), the allergicTo function will check if that number matches with any 
    //of the values of the ALLERGENS object, if it does the function should return true or false
    //go to the bitwise explanation down here for better understanding.
    allergicTo(allergy) {
      return !!(this.score & ALLERGENS[allergy]);
    }
  
  }
  
  const allergy = new Allergies(20)
  
  console.log(allergy.allergicTo('eggs'))
  console.log(allergy.list())
  

  
//Bitwise Explanation//

//for this example just focus on the | and & operators

// you have three permissions and its values
const readPermission = 4;
const writePermission = 2;
const executatePermission = 1;

// you have your permission which is none for now
let myPermission = 0;

// here you grab your permisson and add the write permission to it using the
//  | operator, two of that means or, one of it adds whataver value you're passing
// and sum it to your variable
myPermission = myPermission | writePermission

//there's a lot of 0's and 1's to explain but lets keep it simple
//now you have the value true attached to your permission.
console.log(myPermission)

//now you use the & operator to check if you have that value on yout variable
//in this case you have the write permission
//you can even think it's similar to the includes() method
let message = (myPermission & writePermission) ? "yes" : 'no'
console.log(message)