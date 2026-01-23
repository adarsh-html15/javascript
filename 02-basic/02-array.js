const marvelHeroes = ["ironman", "thor", "hulk", "captain america"];
const dcHeroes = ["superman", "batman", "wonder woman", "flash"];

// marvelHeroes.push(dcHeroes); //this methode push array into the array
// marvelHeroes.push(...dcHeroes); //this methode push elements of array into the array

// newArray = marvelHeroes.concat(dcHeroes); //this methode concat two arrays another method of merging two arrays
// console.log(newArray);

console.log(Array.isArray(marvelHeroes)); // false
console.log(Array.isArray("hello")); // true
console.log("Marvel Heroes:", marvelHeroes);
