// if else statement
const temperature = 30;

if (temperature > 25) {
  console.log("It's a hot day!");
}
else {
    console.log("It's a cold day!");
}

const score = 200
if (score >= 90) {
    const power = "Super Strength";
    console.log(`you have earned ${power}!`);
}
//if else if
const marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
}
else if (marks >= 80) {
    console.log("Grade: B");
}
else if (marks >= 70) {
    console.log("Grade: C");
}
else if (marks >= 60) {
    console.log("Grade: D");
}
else {
    console.log("Grade: F");
}

//ex
const userloggedin = true;
const usercard = true;
if (userloggedin && usercard) {
    console.log("You can make a purchase!");
}
else {
    console.log("Please log in and add a card to make a purchase.");
}

