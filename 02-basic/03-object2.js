// destructuring assignment for objects
const user = {
  id: 42,
  isVerified: true
};

const { id, isVerified } = user;

console.log(id); 
console.log(isVerified);
    
// nested object destructuring
const objectInObject = {
  name: "Bob",
  address: {
    city: "New York",
    zip: "10001",
    phoneNo: {
      first: 123456678,
      second: 9876543210
    }
  },
  collage: "meerut"
};

const { address: { phoneNo: { first, second }, city } } = objectInObject;

console.log(first); 
console.log(second); 
console.log(city);