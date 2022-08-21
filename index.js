///////// Find odd or even Number

const numbers = [1, 2, 3, 4];
const evens = numbers.filter((item) => item % 2 === 0);
console.log("evens number :>", evens); // [2, 4]

/////////// Get length of a Number

let num = 535873375657;
console.log("lenght of a string :>>", String(num).length);

/// or

function num_of_digits() {
  return String(num).split("").length;
}
console.log("lenght of a string :>>", num_of_digits());

//////////// Get the lowest/highest number from  the Array

let arrayOfNumber = [23, -23, 1, 57, 34];

function minMax() {
  return Math.min(...arrayOfNumber);
}
console.log("lowest number :>>", minMax());

///////////////// Filter or Find an Array which includes only Number and used sort()

let mixedArray = ["a1sde234", "a34de3", "swer", "34", "wwev"];

function numInStr() {
  let arrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray = [];
  mixedArray.find((aa) => {
    let nn = aa
      .split("")
      .find((b) => b == arrayOfNumber.find((i) => String(i) == b));
    if (nn) {
      newArray.push(aa);
    }
  });
  return newArray.sort();
}
console.log("Array includes number :>>", numInStr());

/////////////// Find most expensive jewelry from the Object

let obj = {
  "Diamond Earrings": 5980,
  "Gold Watch": 2250,
  "Pearl Necklace": 4650,
};

function mostExpensive() {
  let objectValueToArray = Object.values(obj);
  let expensiveJewelry = objectValueToArray.indexOf(
    Math.max(...objectValueToArray)
  );
  return `The most expensive one is the ${Object.keys(obj)[expensiveJewelry]}`;
}
console.log(mostExpensive());

/////////////////////  Get Total price from an Object

let groceryArray = [
  {
    product: "Milk",
    quantity: 1,
    price: 1.5,
  },
  {
    product: "Eggs",
    quantity: 12,
    price: 0.1,
  },
  {
    product: "Bread",
    quantity: 2,
    price: 1.6,
  },
  {
    product: "Cheese",
    quantity: 1,
    price: 4.5,
  },
];

function getTotalPrice() {
  let individualPrice = groceryArray.map((item) => item.quantity * item.price);
  let totalPrice = individualPrice.reduce((a, b) => a + b, 0);
  return Number(totalPrice.toFixed(1));
}

console.log("getTotalPrice :>> ", getTotalPrice());

///////////// FindIntersection

let strArr = ["31, 3, 4, 7, 13", "31, 2, 4, 13, 15"];

function FindIntersection() {
  let firstArray = strArr[0].split(",");
  let secondArray = strArr[1].split(",");
  let intersection = firstArray.filter(
    (i) => i == secondArray.filter((y) => i === y)
  );
  return intersection;
}
console.log("FindIntersection :>>", FindIntersection());

/////////// Counting frequency of characters in a string using JavaScript

let sentence = "finally summer is coming apple";

let rep = sentence.replaceAll(" ", "");
console.log(rep);

let counter = () => {
  return rep.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

console.log(counter());

///////////// check if between every 2 numbers sum is 10 and includes ??? print true

let str = "ac??c7ss???s34rr???685";

function QuestionsMarks() {
  var res = false;
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}

console.log(QuestionsMarks());

//////////// compare between 2 Array's Math.max and Math.min and then print true or false

let arr1 = [1, 2, 3, 4];
let arr2 = [0, 6];

function canNest(arr1, arr2) {
  if (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  ) {
    return true;
  }
  return false;
}

/////////////// Multiple individual Number and join them together

let n = 2483; // answer = 4|16|64|9

function squareDigits() {
  return Number(
    String(n)
      .split("")
      .map((item) => Number(item) * Number(item))
      .join()
      .replaceAll(",", "")
  );
}
console.log("squareDigits", squareDigits());

/////////// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length

function arrayOfMultiples(num, length) {
  let newArray = [];
  for (let i = 1; i <= length; i++) {
    newArray.push(num * i);
  }
  return newArray;
}
console.log("arrayOfMultiples", arrayOfMultiples(23, 6));

///////// Coding Challenge 1

// let string = "hello beautiful world again ?";

// function StringChallenge() {
//   let makeArray = string.split(" ");
//   let makeFirstLetterCapital = makeArray.map((item) =>
//     (item.split("")[0].toUpperCase() + item.split("").slice(1)).replaceAll(",","")
//   );

//   return String(makeFirstLetterCapital).replaceAll(",", " ");
// }

// console.log(StringChallenge());

/////////////// Coding Challenge 2

function StringChallenge(str) {
  let text = [];
  const numbers = str.split(".");
  for (let i = 0; i < 5; i++) {
    if (numbers[0] > i) text[i] = "full";
    else if (numbers[1] == 0) text[i] = "empty";
    else {
      text[i] = "half";
      for (let j = i; j < 4; j++) {
        text[j + 1] = "empty";
      }
      return String(text).replaceAll(",", " ");
    }
  }
  return String(text).replaceAll(",", " ");
}

console.log(StringChallenge("3.68"));

/////////////  Length of a Nested Array

let testArray = [1, [2, [3, [4, [5, 6]]]]]
console.log(String(testArray).replaceAll(",","").length);

///////////  Modify nested Array and add 100 to each nested element.

function getLength(arr) {
  let result = arr.map(item => {
    return item.length > 1 ?
      item.map(i=> {
      return i.length > 1 ?
        i.map(ii=> ii.length>1 ?
           ii.map(iii => iii.length>1 ?
             iii.map(iiii => iiii+100) 
             :iii+100 ) 
           :ii+100 ) 
        :i+100
    }) 
     :item+100
  })
  return String(result).replaceAll(",", " ")
}

console.log('getLength :>> ', getLength([1, [2, [3, [4, 5, [6, 7], [8, 9]]]]]))

//////////  Create a function that, given a string with at least three characters, returns an array of its: 1. Length 2. First Character and Last Character 3. Middle character if odd number or else 2 character for even number. 

// allAboutStrings("LARA") ➞ [4, "L", "A", "AS", "@ index 3"]

// allAboutStrings("Computer") ➞ [8, "C", "r", "pu", "not found"]

// allAboutStrings("Science") ➞ [7, "S", "e", "e", "@ index 5"]

function allAboutStrings(str) {

  let resultArray = []

  resultArray.push(str.length)
  resultArray.push(str[0].toUpperCase())
  resultArray.push(str[str.length-1])
  let getMiddleChar = str.length % 2 == 0 ? str.substring(str.length/2-1 , str.length/2+1) : str[Math.floor(str.length/2)]
  resultArray.push(getMiddleChar)
  let findSecondCharacter = str.split("").filter(i => i == str.split("")[1])[1]
  let indexOfLetter = findSecondCharacter ?  (str.replace(str[1], "").indexOf(str[1]))+1 : "not found"
  resultArray.push(`@ index ${indexOfLetter}`)

  return resultArray;
}

console.log("AllAboutStrings", allAboutStrings("Science"));

///////////////  First Letter Shift

// shiftSentence("create a function") ➞ "freate c aunction"

// shiftSentence("it should shift the sentence") ➞ "st ihould shift she tentence"

// shiftSentence("the output is not very legible") ➞ "lhe tutput os iot nery vegible"

// shiftSentence("edabit") ➞ "edabit"


function shiftSentence(str) {
	let makeArray = str.split(" ").map((i, index)=> 
  {return str.split(" ")[str.split(" ").length <= index+1 ? 0 : index+1]})
  console.log("makeArray", makeArray);
}

console.log('shiftSentence', shiftSentence("it should shift the sentence"));


//////// new exercise added website ///////// 

