
// //Username Generator
// const name = new String('Ram Bahadur Thapa')

// let newName = name.toLowerCase().split(' ')

// console.log(newName[0]+"."+newName[2]);

// //Email Masking
// const email = "jane.doe@gmail.com"

// const firstPart = email.slice(0,email.indexOf("@"))
// const secondPart = email.slice(email.indexOf("@"))

// const finalPart = firstPart.slice(0,2) + "*".repeat(firstPart.length-2) + secondPart 

// console.log(`\n${finalPart}`);

// //Capitalize Title
// const title = "the lord of the rings"

// const titleSplit = title.split(" ")
// let result = [5]
// for(let i = 0; i < titleSplit.length; i++)
// {
//     let word = titleSplit[i] 
//     result[i] = (word.charAt(0).toUpperCase() + word.slice(1)) 

// }


// console.log(result.join(" "))

// //Check Strong Password

// let password = "Roman123!";
// if(password.length >= 8)
// {
//     let hasUpper = false;
//     let hasLower = false;
//     let hasNumber = false;
//     let hasSpecial = false;

//     for(let i = 0; i < 8; i++)
//     {
//         let character = password[i];

//         if(character >= "A" && character <= "Z")
//         {
//             hasUpper = true;
//         }
//         else if(character >= 'a' && character <= 'z')
//         {
//             hasLower = true;
//         }
//         else if(character >=0 && character <= 9)
//         {
//             hasNumber = true;
//         }
//         else{
//             hasSpecial = true;
//         }
//     }

//     if(hasLower && hasUpper && hasSpecial && hasNumber   )
//     {
//         console.log(`seems like legit `);
//     }
//     else{
//         console.log(`something went `);
//     }
// }

//URL slug generator
// let a = "Learn JavaScript in 30 Days!"
// let splittedA = a.split(" ").join("-").toLowerCase()

// console.log(splittedA)
// let result = ""

// for(let i = 0; i < splittedA.length; i++)
// {
//     if("a" <= splittedA[i] && splittedA[i] <= "z" ||
//         "0" <= splittedA[i] && splittedA[i] <= "9" ||
//         splittedA[i] === "-")
//         {
//             result += splittedA[i]
//         }
// }

// console.log(result);


//Word Counter

// let str = " Hello World this is a JS"

// let word = str.trim().split(" ")

// console.log(`${word[0]} `);
// let count = 0;
// console.log(`${str.trim()} `);
// for(let i = 0; i < word.length; i++)
// {
//     if( word !== " ")
//         count++;
    
// }

// console.log(count);


//Word Reverser

// let str = "I love JS"

// let newStr = str.trim().split(" ")
// let result = ""
// console.log(`${newStr.length} `);
// for(let i = newStr.length-1; i >= 0;i-- )
// {
//     result += newStr[i]+ " "
// }

// console.log(`${result.trim()} `);

//Working with numbers
const num1 = 2.34623
console.log("toFixed: "+ (num1.toFixed(2)))
console.log("toPrecision: " + (num1.toPrecision(3)))

const max = 50
const min = 30

console.log(`${Math.ceil(Math.random() * (max - min +1) + min ) } `);