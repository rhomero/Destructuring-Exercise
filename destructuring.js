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
  