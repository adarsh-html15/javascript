//  let myName = "Adarsh      "
// // this will show the space part as the length of the name
//  console.log(myName.length); 
//  console.log(myName.truelength); //but we will make prototype truelength 
 

let myHeros = ['thor','ironman','hulk']
let heroPower = {
    thor:"hammer",
    ironman:"money",
    hulk:"anger",
    getIronmanpower: function () {
        console.log(`ironman power is ${this.ironman}`);
        
    }
}

Object.prototype.adarsh = ()=> {
    console.log(`adarsh is present in all objects now`)
};

Array.prototype.Aakansha = ()=>{
    console.log(`Aakansha says hi to Adarsh`);
    
}

heroPower.adarsh()
myHeros.adarsh()
// heroPower.Aakansha()    not happens

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

// Teacher.__proto__ = user

// modern syntex
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "chaiAurCode      "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`true lenght is: ${this.trim().length}`);
    
}

anotherUsername.truelength()
"Adarsh maurya   ".truelength()
"1       2".truelength()