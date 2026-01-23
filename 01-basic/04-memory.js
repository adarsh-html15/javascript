// two type of memory allocation in javascript
// 1. Stack memory allocation(primitive data types)   
// 2. Heap memory allocation(non-primitive data types)
let myname = "Adarsh"
myanothername = myname
myanothername = "ganesh"
console.log(myname)
// so adarsh store in stack type of memory thats why it will not change and print adarshafter redefining the datatype
console.log(myanothername)
let person = {
    name: "Adarsh",
    age: 22
}
let anotherperson = person
anotherperson.age = 23
console.log(person.age)
// so here person store in heap type of memory thats why when we change anotherperson it will also reflect in person object because both are pointing to same memory location in heap memory.   