// Dates

let myDate = new Date();
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());


let myNewDate = new Date(4040,2,3); //months starts from 0 in js
console.log(`${myNewDate.toLocaleString()} is the new date `);

let myTimeStamp = new Date()
console.log(`${myTimeStamp.getTime()} `);