// console.console.log("hello world");

// const name = "salohiddin"
// console.log(`hello i am ${name}`);

/* const a = 2
const b = 3
console.log(a+b);
 */

// const numbers = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log(sum);

// const bigNum = (numbers) => Math.max(...numbers);

// console.log(bigNum([5, 2, 9, 1, 7]));

// function plusNum(params) {
//   let result = [];

//   for (let i = 0; i < params.length; i++) {
//     if (params[i] % 2 === 0) {
//       result.push(params[i]);
//     }
//   }

//   return result;
// }

// const evenNum = (numbers) => numbers.filter((num) => num % 2 === 0);

// function plusNum(numbers) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }

// console.log(plusNum([1, 3, 5, 4, 2, 9]));

// const str = "anna";

// function reversed(text) {
//   return text.split("").reverse().join("");
// }

// console.log(reversed(text));

// function isPalindrome(str) {
//   let rev = str.split("").reverse().join("");
//   return str === rev;
// }

// console.log(isPalindrome(str));

// const text = "javaScript i love language";

// console.log(text.split("").length);

// const str = "javaScript my love";

// function findVowel(str) {
//   let vowels = "aeiou";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(findVowel(str));

// function accCal(param1, param2){
//   return param1 * param2
// }

// console.log(accCal(3,5));

// const fn = (a, b, op) => {
//   switch (op) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return "invalid operator";
//   }
// };

// console.log(fn(3, 4, "+"));

// function duplNum(arr) {
//   let max = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!max.includes(arr[i])) {
//       max.push(arr[i]);
//     }
//   }

//   return max;
// }

// console.log(duplNum([1, 2, 2, 3, 4, 4, 5]));

// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


const fs = require('fs');
