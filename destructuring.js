//obj destruct 1
let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // ? 1846

//obj destruct 2

let planetFacts = {
    numbPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numbPlanets, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ? {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

  //obj destruct 3 

  function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ? "Your name is Alejandro and you like purple" 
  getUserData({firstName: "Melissa"}) // ? "Your name is Melissa and you like green" 
  getUserData({}) // ? "Your name is undefined and you like green" 

   //array destructuring 
   let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ? "Maya"
console.log(second); // ? "Marisa"
console.log(third); // ? "Chi"

  //array destructuring 2
  let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // ? "Raindrops on roses"
  console.log(whiskers); // ?  ""whiskers on kittens""
  console.log(aFewOfMyFavoriteThings); // ? ["Bright copper kettles", "warm woolen mittens","Brown paper packages tied up with strings"]

  //array destructuring 3
  let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ? [10,30,20]
