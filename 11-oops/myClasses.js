// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPassword() {
        return `${this.password}abc`
    }
    changeUserName() {
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new User("adarsh", "Adarsh@g.com", "1234")
console.log(user1.encryptPassword());
console.log(user1.changeUserName());


// behind the scene

function User2  (username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

User2.prototype.encryptPassword = function () {
    return `${this.password}######`
}
User2.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new User2("Aakansha","moti@gmail.com",123)
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUserName());


