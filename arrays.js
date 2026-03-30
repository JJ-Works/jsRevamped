let arr = ["hello", 1, 3,4,5,6,6,7,7];
// console.log(arr);

// // arr.push(133)
// arr.pop()
// arr.unshift(23) // This is considered to be bad practice as all the elements of the arrays need to be shifted making it time consuming.
// arr.shift() //this removes the first element
// console.log(arr);

// let newArr = [2,3,4,5,4]
// console.log(`${newArr} `);
// console.log(`${arr} `);

// let newnew = arr.join(',,,')
// console.log(`${newnew} `);

console.log(`${arr} this is the original array. `);
console.log(
  "using slice the values get extracted without any changes in the original array",
  arr.slice(0, 2),
);
console.log(
  `whereas in the splice the array gets chagned or updated and only the values not extracted stays in the array `,
  arr.splice(1, 2),
);
