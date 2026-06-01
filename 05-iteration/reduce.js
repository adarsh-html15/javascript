const array1 = [1, 2, 3]

const newTotal = array1.reduce(function (accumulater, currval) {
    console.log(`accumulater:${accumulater} and current value:${currval}`);

    return accumulater + currval;
    }, 0)
console.log(newTotal);

//  using arrow function

const nums = [1,2,3,4]

const total = nums.reduce((acc , currval) => acc+currval,0)

console.log(total);

const shoppingCart =[
    {
        itemName:"javascript",
        price :2999
    } ,
    {
        itemName:"python",
        price :2333
    } ,
    {
        itemName:"java",
        price :2099
    }
]

// if we want to add the price of all cources

const totalPrice = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(totalPrice);
