// const coding=["js","ruby","cpp","java","python","c"]

// const valuse = coding.forEach((item)=>{
//     console.log(item)
// })

// console.log(valuse) //do not reurn any value


// const myNums = [1,2,3,4,5,6,7,8,9,10]

// myNums.filter((num)=>{
//      console.log(num);
// })

// const newVal = myNums.filter((nums2)=> nums2>5)
// console.log(newVal);


const books = [
    { title: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
    { title: "1984", genre: "Dystopian", publish: 1949 },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925 },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937 },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
    { title: "The Catcher in the Rye", genre: "Fiction", publish: 1951 },
    { title: "The Alchemist", genre: "Adventure", publish: 1988 },
    { title: "The Da Vinci Code", genre: "Mystery", publish: 2003 },
    { title: "Sapiens: A Brief History of Humankind", genre: "History", publish: 2011 },
    { title: "Educated", genre: "Biography", publish: 2018 }
];

// Example: Printing each book's details
books.forEach(book => {
    // console.log(`${book.title} is a ${book.genre} book published in ${book.publish}.`);
});
let userBooks = books.filter((bk) => bk.genre === "Fiction")
userBooks = books.filter((bk) => {
    return bk.publish > 1980 && bk.genre === "Mystery"
})

console.log(userBooks);
