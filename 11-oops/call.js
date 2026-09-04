function SetUserName(username) {
    //complex DB call
     this.username = username
}

function creatUser(username, email, password){
      // .call to call other object in another globle execution context
    SetUserName.call(this,username)
      // we should also call "this" for take the other contect of the object
    this.email = email
    this.password = password
}

const use = new creatUser("Adarsh","Adarsh@gmail.com","123")
console.log(use);

// The specialized .call() method executes a function while explicitly choosing what the this keyword refers to inside that function.