const user = {
    username:"Adarsh",
    loginCount: 9,
    signedIn: true,
    getUserDetails:function () {
        console.log("got user details from the database");
        console.log(this);
        
        console.log(`Username is ${this.username}`)
    }
}

console.log(user.username);
console.log(user.getUserDetails());


