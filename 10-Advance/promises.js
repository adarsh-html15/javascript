const promiseOne = new Promise(function (resolve, reject) {
    // do an async task
    //  DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complated');
        resolve()
    }, 1000);
})

promiseOne.then(function () {
    console.log("Promise cosumed")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Asinc task 2");
        resolve()

    }, 1000);
}).then(function () {
    console.log("async 2 resolved");

});


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Adarsh", email: "Adarsh@gmail.com" })
    }, 1000)
});
promiseThree.then(function (user) {
    console.log(user);

})


const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Adarsh", password: "123" })
        } else {
            reject('somethingis wrong')
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username

}).then((username) => {
    console.log(username);

}).catch((error) => {
    console.log(error);

}).finally(() => console.log("promise eighter resolve or error"));


const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Aakansha", password: "123" })
        } else {
            reject('some are wrong')
        }
    }, 1000);
})

async function consumePromiseFive() {
    const response = await promiseFive
    console.log(response);

}

consumePromiseFive()

async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/hiteshchoudhary')
        const data = await response.json()     //to get the data in json
        console.log(data);
    } catch (error) {
        console.log("E:",error)
    }
}
getAllUsers()

