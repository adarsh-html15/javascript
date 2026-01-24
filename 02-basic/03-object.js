let user1 = {
    name: "Adarsh maurya",
    "main Email": "adarsh.maurya@example.com",
    age: 22,
    branch: "CSE",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday", "Saturday"],
    city:"meerut"
}
console.log(user1.name);
console.log(user1.age);
// this type of key which have space we have to access by using bracket notation
console.log(user1["main Email"]);
console.log(user1["lastLoginDays"]);

user1.name = "the Adarsh maurya";
// line 18 and 19 are used to change valuse of object
console.log(user1.name);
user1["main Email"] = "adarsh.maurya@newdomain.com";
// for not changaing the value inside theobject we have to freez the object
Object.freeze(user1);
user1.age = 23; // this will not work because object is freezed
console.log(user1.age);
