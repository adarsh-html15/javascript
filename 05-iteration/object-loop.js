// for in ---------------------------------
const myObject ={
    js:"javascript" ,
    cpp:"c++",
    rb:"ruby",
    swift:'swift by apple'
}

for (const key in myObject) {
    console.log(key);
    
    console.log(`${key} are the shortcut for the ${myObject[key]}`);

}



//  for in loop in array

const programming = ["js","rb","cpp"]
for (const key in programming) {
  console.log(key);
  
    
}

