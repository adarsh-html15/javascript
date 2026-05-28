// for of

 const arr= [1,2,3,4,5];
 
for (const num of arr) {
//   console.log(num);    
}

const greeting = "hellow adarsh";
for (const great of greeting) {
    // console.log(`Each char is ${great}`)
}
// map
// map is a data unique data sconstructor wich is also kry type function
const map= new Map()
 map.set('in',"Indis");
 map.set("us","united state of india")
 map.set("fr","france")


//  console.log(map)

 for (const key of map) {
    console.log(key);
    
 }
//  different type
 for (const [key, value] of map) {
    console.log(key,':-',value);
 }


 
