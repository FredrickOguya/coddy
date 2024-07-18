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
  
const marketPrices = [10, 5, 20, 12, 8];

// Write code here
const newPrice = marketPrices.sort((a,b)=> a-b)
console.log(newPrice)

let students = [ 'Jack', 'Jinee', 'Hook', 'Zohie', 'John' ];

// Write code here
let thirdAndForth = students.slice(1,3)
console.log(thirdAndForth)

let numbers = [ 99, 32, 43, 54, 100];

// Write code here

let newNumbers = numbers.splice(numbers.length-3,numbers.length-1,"a",'b','c')
console.log(numbers)

// Write code here

const team = ['fred','jack','javan','kinyaa','william']

const removed = team.pop();

const newTeam = team.push('joe','maxi');

const qualified = team.shift()

console.log(team.length)

const prices = [199.99, 249.50, 79.99, 12.50, 8.99, 350.75];

// Write code here

let newPrices=prices.map((numbers)=>Math.round(numbers))
const pricesUndere200 = newPrices.filter(price=>price<200)
let newPricesUnder = pricesUndere200.sort((a,b)=>a-b)
let newPrice = []
newPricesUnder.forEach(price=>newPrice.push(`${Math.round(price*0.9)}`))
console.log(newPrice)

function trial(num){
    // Write your code below
    switch(true){
        case num ===1:
        console.log('T');
        break;
        case num ===0:
        console.log('F');
        break;
        case num>1:
        console.log('P')
        break;
        case num<0:
        console.log('N')
        break;
    }
}
trial(-46)

for (let i = 1; i < 29; i ++) {
    if(i === 9){
        break;}
    console.log(i)
}

for (let i = 1; i < 21; i++) {
    if(i%2===1){
        continue
    }
	console.log(i)
}

function trial(n){
    let ne=1
    for (let i=1;i<n;i++){
        ne*=i
      
        
    }
    console.log(ne*n)
    
}
trial(8)
*/
const n = 5


function sum_numbers() {
	// Write your code here
    let sum=0
    for (let i = 0; i < n + 1; i++) {
        sum +=i
    }
    
    console.log(sum)
    
}

for (let i = 0; i < n; i++) {
	sum_numbers()
}