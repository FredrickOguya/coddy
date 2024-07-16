/*
let candyBasket = ['red','orange','yellow','green','blue']


console.log(candyBasket[(candyBasket.length-1)/2])

const cupcakes = ["Vanilla", "Chocolate", "Red Velvet", "Lemon"];

// Write code here
console.log(cupcakes.length)

let playlist = ['Uptown Funk', 'Happy', 'Downtown'];
let removed= playlist.pop()
playlist.push('Dynamite')
console.log(playlist)


let tasks = ['Read a book', 'Play sports', 'Wash dishes'];

// Write code here
let removed = tasks.shift();
 tasks.unshift('Feed the cat')
console.log(tasks)

const jackScores = [85, 92, 78, 100, 89];

// Write code here

console.log(jackScores.includes(100))

let secretWord = ['h', 'c', 'e', 't', 'y', 'd', 'd', 'o', 'c'];
// Write code here
console.log(secretWord.reverse().join(''))

let chocolates = [3, 4, 7, 2];

// Write code here
newArray = [];
chocolates.forEach((chocolate)=>{newArray.push(chocolate*=2)})
console.log(newArray)

const scores = [75, 88, 62, 92, 55];

// Write code here

console.log(scores.find((number)=>number>90))

const friends = [
    { name: "Alice", online: true },
    { name: "Bob", online: false },
    { name: "Charlie", online: true },
    { name: "David", online: false }
  ];
  
  // Write code here
  
  const onlineFriends= friends.filter((filter)=>filter.online===true)
  console.log(onlineFriends)

const inventory = [5, 3, 2, 1];

// Write code here

const newInventory = inventory.map(numbers=>numbers*2)

console.log (newInventory)
*/  
const marketPrices = [10, 5, 20, 12, 8];

// Write code here
const newPrice = marketPrices.sort((a,b)=> a-b)
console.log(newPrice)
