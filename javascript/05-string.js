const name = "Adarsh"
const lastname = `maurya`
// old method
console.log("my name is " + name + " and lastname is " + lastname);
// new method
console.log(`my name is ${name} and lastname is ${lastname}`);

const gamename = String(`president`)
console.log(typeof gamename);
console.log(gamename.length);
console.log(gamename);
// so in this method we can use string methods
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.slice(2,5));
console.log(gamename.replace('iden', 'ident'));
console.log(gamename.charAt(3));
console.log(gamename.indexOf('e'));
console.log(gamename.lastIndexOf('e'));
const Newgame = "     new game is on     "
console.log(Newgame.trim());
// trim method removes the extra spaces from starting and ending of the string
