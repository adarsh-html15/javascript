array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let index = 0; index < 20; index++) {
   
    if (index == 11) {
        console.log("11 is the best number");
        break; // exit the loop
    }
    console.log(`value of index is ${index}`);
    
}

for (let index = 0; index < 20; index++) {
    
    if (index == 12) {
        console.log("12 is the error number");
        continue; // skip the rest of the loop and move to the next iteration
    }
    console.log(`value of index is ${index}`); // this will never be executed
    
}