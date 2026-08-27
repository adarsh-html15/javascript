const promiseOne = new Promise(function(resolve, reject){
    // do an async task
    //  DB calls, cryptography, network
    setTimeout(() => {
        console.log('Async task is complated');
        resolve()
    },1000);
})

promiseOne.then(function(){
    console.log("Promise cosumed")
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Asinc task 2");
        resolve()
        
    }, 1000);
}).then(function(){
    console.log("async 2 resolved");
    
});


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Adarsh", email:"Adarsh@gmail.com"})
    },1000)
});
promiseThree.then(function(user){
 console.log(user);
 
})


const promiseFour = new promise(function(resolve,reject){
    setTimeout(() => {
        let error = true
        if (!error) {
        resolve({username:"Adarsh",password:"123"})            
        }else{
           reject('somethingis wrong') 
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username)=>{
     console.log(username);
     
}).catch((error)=>{
    console.log(error);
    
})
