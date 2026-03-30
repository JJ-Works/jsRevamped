// let arr = ["hello", 1, 3,4,5,6,6,7,7];
// // console.log(arr);

// // // arr.push(133)
// // arr.pop()
// // arr.unshift(23) // This is considered to be bad practice as all the elements of the arrays need to be shifted making it time consuming.
// // arr.shift() //this removes the first element
// // console.log(arr);

// // let newArr = [2,3,4,5,4]
// // console.log(`${newArr} `);
// // console.log(`${arr} `);

// // let newnew = arr.join(',,,')
// // console.log(`${newnew} `);

// console.log(`${arr} this is the original array. `);
// console.log(
//   "using slice the values get extracted without any changes in the original array",
//   arr.slice(0, 2),
// );
// console.log(
//   `whereas in the splice the array gets chagned or updated and only the values not extracted stays in the array `,
//   arr.splice(1, 2),
// );


// Advanced arrays stuff

const fruit = ["mangoes", 'apple', 'banana']
const vegetable = ['carrot', 'ladyfinger', 'radish', "shallot"]

// console.log(fruit.concat(vegetable))
// fruit.push(vegetable)
// console.log(`${fruit} `);

// Either you can concat arrays and store it in new vars or
// Use spreader [...vegetable, ...fruite]

// const foodArray = [...vegetable,...fruit,...['hunter']]
// console.log(`${foodArray} `);

let arrayFirst = [1,3,4,[23,43,64,64,77,33],23,[222,333,444,555,[23940,[209349]]]]
let arraySecond = arrayFirst.flat()
console.log(arraySecond)

console.log(`${Array.isArray(arrayFirst)} this is an array just checking with Array.isArray `);
console.log(`${Array.from('KKisthegreaterestsingerofalltime')} this Array.from() can convert anything to an Array. `);