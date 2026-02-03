const user = {
    name: "Adarsh",
    item: "ASUS LAPTOP",
    price: 200
};
 
function handlecart(obj) {
    if (obj.item == null) {
        return 'Please provide the item name';
    }
    return `the product is ${obj.item} and the price is ${obj.price}`;
}
console.log(handlecart(user));

function cart(...num) {
    return num; // rest operator which is used to collect all the arguments into an array
}
console.log(cart(4000));
console.log(cart(4000, 5000, 6000, 7000));