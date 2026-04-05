let arr = [1,2,3,4,5,6,7]

// // .forEach function doesn't return any value.
// arr.forEach((num) => {
//     if(num < 7)
//         console.log(`${num} `);
// }
// )

const usingFilter = arr.filter( (num) => {
    return num > 3
}
)

console.log(`This is the array accessing using filter. \n${usingFilter}`)
