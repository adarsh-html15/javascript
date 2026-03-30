//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("5 is the best number");
    }
    console.log(element);
}

// for loop
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(`ouuter loop: ${element}`);
    for (let j = 0; j < 10; j++) {
        const element2 = j;
        // console.log(`inner loop: ${element2} while outer loop is ${element}`);
        console.log(`i * j = ${element * element2} `);
        // for (let k = 0; k < 10; k++) {
        //     const element3 = k;
        //     console.log(`innermost loop: ${element3} while outer loop is ${element} and middle loop is ${element2}`);
        //     for (let l = 0; l < 10; l++) {
        //         const element4 = l;
        //         console.log(`deepest loop: ${element4} while outer loop is ${element} and middle loop is ${element2} and inner loop is ${element3}`);
        //     }
        // }
    }
}
 let myArray = [1, 2, 3, 4, 5];
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}
