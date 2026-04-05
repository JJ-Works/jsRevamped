// let arr = [1,2,3,4,5,6,7]

// // // .forEach function doesn't return any value.
// // arr.forEach((num) => {
// //     if(num < 7)
// //         console.log(`${num} `);
// // }
// // )

// const usingFilter = arr.filter( (num) => {
//     return num > 3
// }
// )

// console.log(`This is the array accessing using filter. \n${usingFilter}`)

const books = [
{ title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
{ title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
{ title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
{ title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
{ title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
{ title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
{ title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
{ title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const booksDetails = books.filter( (book) => book)

console.log(booksDetails);