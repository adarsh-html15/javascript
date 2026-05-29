const nums = [1,2,3,4,5,6,7,8,9,10]

const myNums = nums.map( (num)=> {
    return num+10

})
console.log(myNums);

//chaining method
  const newNums = nums
          .map((num)=> num*3)
          .map((num)=> num+10)
          .filter((num)=> num>22) 
  console.log(newNums);
   

const nums2 = [1,2,3,4,5,6,7,8,9,10]
const newNums2 = nums2.map((num)=>{
    return num*3
})
console.log(newNums2);
