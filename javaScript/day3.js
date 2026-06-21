// function twoSum(param1, param2) {
//   return param1 + param2;
// }
// console.log(5, 3);

// function isEven(num) {
//   return num % 2 === 0;
// }

// console.log(4);
// console.log(7);

// 3masala

// function reverse(str) {
//     return str.split("").reverse().join("")
// }

// console.log(reverse("hello"));

// const numbers = [3, 9, 1, 20, 5];
// let max = numbers[0]

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
// }
// console.log(max);

// const numbers = [1, 2, 3, 4]
// let sum = 0

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]
// }

// console.log(sum);

// function countVowel(str) {
//     let count = 0

//     for (let i = 0; i < str.length; i++){
//         let letter = str[i]

//         if ("aeiou".includes(letter)) {
//             count++
//         }
//     }

//     return count

// }

// console.log(countVowel("javaScript"));

// function countVowel(str) {
//     return [...str].filter(c => "aeiou".includes)

// }

// console.log(countVowel("JavaScript"));

// function factorial(num) {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }

//   return result;
// }

// console.log(factorial(5));

// function isPrime(num) {
//   if (num < 2) {
//     return false;
//   }

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// function isPrime(data) {
//   if (data < 2) {
//     return false
//   }

//   for (let i = 2; i < num; i++){
//     if (data % 2 === 0) {
//       return false
//     }
//   }

//   return true
// }

// const numbers = [1, 2, 3, 4, 5, 6]

// function isEven(num) {
//   let result = []

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0)
//       result.push(numbers[i])
//   }

//   return result
// }

// function isPalidrome(str) {
//   let reversed = str.split("").reverse().join("")

//   return str === reversed
// }

// isPalindrome("anna");
// isPalindrome("hello");
// isPalindrome("racecar");


const object = {
  a: 10,
  b: 20,
  c: 30,
};

function getObject(object) {
  let result = 0
  
  for (let i = 0; i < object.length; i++){
    result += obj[key]
  }

  return result
}

console.log(getObject(object));

