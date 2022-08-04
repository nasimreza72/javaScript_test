//////////// Get length of a String

let num = 535873375657;

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

///////////////// Filter an Array which includes only Number

let mixArray = ["asde234", "a34de3", "swer", "34", "wwev"];

function numInStr() {
  let arrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let newArray = [];
  mixArray.filter((aa) => {
    let nn = aa
      .split("")
      .filter((b) => b == arrayOfNumber.filter((i) => String(i) == b));
    if (nn.length > 0) {
      newArray.push(a);
    }
  });
  return newArray;
}
console.log("Array includes number :>>", numInStr());

/////////////// Find most expensive jewelry from the Object

let obj = {
  "Diamond Earrings": 980,
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
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 },
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

let sentence = "summer rrr is coming";

let rep = sentence.replaceAll(" ", "");
console.log(rep);

let counter = () => {
  return rep.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

console.log(counter());
