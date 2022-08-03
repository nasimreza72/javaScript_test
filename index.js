
// let num = 535873375657

// function num_of_digits() {

//     return String(num).split("").length
// }

// console.log(num_of_digits())

// let array = [23, -23, 1 ,57, 34]

// function minMax() {
// 	return (Math.min(...array))
// }

// console.log(minMax())

/////////////////////

// let word = ["asde234", "a34de3", "swer", "34", "wwev"]

// function numInStr() {
// 	let arrayOfNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let newArray = []
// 	word.filter( a => {
// 		let n = a.split("").filter(b => b == arrayOfNumber.filter(i => String(i) == b))
//         if(n.length > 0){
//             newArray.push(a)  
//         }
// 	})
//     return newArray
// }

// console.log(numInStr());

///////////////


// let obj = {
//     "Diamond Earrings": 980,
//     "Gold Watch": 2250,
//     "Pearl Necklace": 4650
//   }

// function mostExpensive() {
// 	let array = Object.entries(obj)
// 	let expensive = array.map((item) => item[1])
// 	let result = expensive.indexOf(Math.max(...expensive))
// 	return `The most expensive one is the ${Object.keys(obj)[result]}`
// }
// console.log(mostExpensive());

/////////////////////

// let groceryArray = [
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Eggs", quantity: 12, price: 0.10 },
//   { product: "Bread", quantity: 2, price: 1.60 },
//   { product: "Cheese", quantity: 1, price: 4.50 }
// ]

// function getTotalPrice() {
//   let total = groceryArray.map( item => item.quantity * item.price)
//   let totalNumber = total.reduce( (a, b) => a + b, 0)
//   return Number(totalNumber.toFixed(1))
// }

// console.log('getTotalPrice :>> ', getTotalPrice());

////////////////////////
// let array = ['A', 'B', 'A']
// console.log(array[0]);

// function getFrequencies() {
//   let counter = 0
//   array.forEach(element => {
//    let remove = array.filter( i => i !== element)
//    console.log('1st :>> ', remove[0], Number(remove.length));
//    let remove2 = remove.filter( ii => ii !== element)
//    console.log(remove2);
//   });
// }

// console.log(getFrequencies());

///////////////

let strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]

function FindIntersection() { 

  let firstArray = strArr[0].split(",")
  let secondArray = strArr[1].split(",")

  let intersection = firstArray.filter(i => i == secondArray.filter(y => i === y))
  
  console.log(firstArray)
  
    return intersection; 
  
  }
     
  // keep this function call here 
  console.log(FindIntersection());

//////////////////////
let sen = "kitchens kitchens"

function LongestWord() {
  // code goes here 
 let fromStringToArray =  sen.split(" ")
 let result = fromStringToArray.map( i => i.length)
 console.log(result)
  return Math.max(...result); 
}

console.log(LongestWord());