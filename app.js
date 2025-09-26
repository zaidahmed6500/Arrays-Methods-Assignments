
// 1
const number = [1, 2, 3, 4, 5];

const num = number.map(item => item * 11)
console.log(num)



// 2
const fruits = ["apple", "banana",
"cherry"];

const upperCase = fruits.map(item => item.toUpperCase());
console.log(upperCase)



// 3
const names = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
const newName = names.map(item => item.name);
console.log(newName)


// 4
const animals = ["dog", "elephant",
"tiger"]

const newAnimals = animals.map(item => item.length)
console.log(newAnimals)



// 5
const task = ["task1", "task2","task3"];

const taskDone = task.map(item => `${item}-Done`)
console.log(taskDone)


// 6
const square = [2, 4, 6, 8];
const newSquare = square.map(item => item ** 2)
console.log(newSquare)



// 7
// const price = [10, 20, 30, 40, 50];
// const strPrice = price.map(item => item.toString()).map(item => {
//   for(let i=0; i<price.length; i++){
//     return `$${item[i]}`
//   }
// }
// )
// console.log(strPrice)
const price = [10, 20, 30, 40, 50];
const priceWithSign = price.map(item => `$${item}`)
console.log(priceWithSign)



// 8
const dates = [
  "2025-09-22",
  "2025-10-01",
  "2025-12-25"
];
const formattedDates = dates.map(item => new Date(item).toDateString())
console.log(formattedDates)




// 9
const  evenNumbers = [1,2,3,4,5,6,7,8,9,10]
const isEven = evenNumbers.map(item => item % 2 === 0)
console.log(isEven)



// 11
const evenNumber = [1, 2, 3, 4, 5, 6];
const even = evenNumber.filter(item => item % 2 === 0)
console.log(even)



// 12
const negative = [-3, 4, -1, 7, -5];
const negativeNum = negative.filter(item => item > 0)
console.log(negativeNum)



// 13 
const newNames = ["Joe", "Elizabeth", "Tom", "Anna"]
const greaterNames = newNames.filter(item => {
  if(item.length > 4 ){
    return item
  }
})
console.log(greaterNames)




// 14 under construction
const active = [{name: "Alice", active: true}, 
                {name: "Bob", active: false}];

const activeUser = active.filter(item => item.active)
console.log(activeUser)




// 15 under construction
const words = ["apple", "banana", "avocado", "cherry", "apricot"];
const aWords = words.filter(item => item.startsWith("a"))
console.log(aWords)



// 16
const greaterNum = [1, 3, 18, 6, 8, 10, 13, 5, 25, 41]
const keepNum = greaterNum.filter(item => item > 10)
console.log(keepNum)



// 17
const mixedArray = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];
const falsyvalue = mixedArray.filter(item => Boolean(item))
// const falsyvalue = mixedArray.filter(item => Boolean(item))
console.log(falsyvalue)



// 18 
const texts = ["coding is fun", "decode", "learn to code", "programming", "codec"];
const getString = texts.filter(item => item.includes("code"))
console.log(getString)


// 19
const data = [1, null, 2, undefined, 3, null, 4];
const cleanData = data.filter(item => item !== null && item !== undefined)
console.log(cleanData)




// 20
const products = [{name: "Phone", price: 99}, {name: "Tablet", price: 120}]
const getProducts = products.filter(item => item.price < 100)
console.log(getProducts)




// 21
const numbers = [1, 2, 3, 4];
const total = numbers.reduce((accumulator,current) => accumulator + current, 0)
console.log(total)


// 22
const newNumbers = [5, 12, 8, 21, 3];

const maxNumber = newNumbers.reduce((max, current) => Math.max(max, current));

console.log(maxNumber);



// 23
const newFruits = ["apple", "banana", "apple", "orange", "banana"];

const counts = newFruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(counts);
