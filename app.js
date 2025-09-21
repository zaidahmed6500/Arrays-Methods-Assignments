
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

const taskDone = task.map(item => {
  item === task;
  return "Done"
})
console.log(taskDone)


// 6
const square = [2, 4, 6, 8];
const newSquare = square.map(item => item ** 2)
console.log(newSquare)



// 7
const price = [10, 20, 30, 40, 50];
const strPrice = price.map(item => item.toString()).map(item => {
  for(let i=0; i<price.length; i++){
    return `$${item[i]}`
  }
}
)
console.log(strPrice)



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

const activeUser = active.filter(item => {
  if(item.active == true){
    return item + " Active"
  }
})
console.log(activeUser)



// 15 under construction
const words = [
  "apple",    // contains 'a'
  "banana",   // contains 'a'
  "grape",    // contains 'a'
  "cat",      // contains 'a'
  "carrot",   // contains 'a'
  "blue",     // no 'a'
  "tree",     // no 'a'
  "sky",      // no 'a'
  "moss",     // no 'a'
  "light"    // no 'a'
];


