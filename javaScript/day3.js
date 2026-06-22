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

// const object = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// function getObject(object) {
//   let result = 0;

//   for (let i = 0; i < object.length; i++) {
//     result += obj[i];
//   }

//   return result;
// }

// console.log(getObject(object));

// const numbers = [1, 2, 2, 3, 4, 4];

// function duplicateNum(numbers) {
//   let result = []

//   for (let i = 0; i < numbers.length; i++) {
//     if (!result.includes(numbers[i])) {
//       result.push(numbers[i])

//     }

//   }

//   return result

// }

// function fib(n) {
//   let a = 0;
//   let b = 1;

//   for (let i = 2; i <= n; i++) {
//     let next = a + b;
//     a = b;
//     b = next;
//   }

//   return n === 0 ? 0 : b;
// }

// const numbers = [1, 2, 3, 4, 5, 6];

// function smallNum(numbers) {
//   let result = numbers[0];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < result) {
//       result = numbers[i]
//     }
//   }

//   return result;
// }

// const text = "JavaSciprt - Zor"

// function findText(text) {
//   return text.length

// }

// console.log(findText(text));

// const obj = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// function countKeys(obj) {
//   return Object.keys(obj).length;
// }

// console.log(countKeys(obj));

// function secondLarger(arr) {
//   let max = arr[0];
//   let secondMax = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     let num = arr[i];

//     if (num > max) {
//       max = num;
//     } else if (num > secondMax) {
//       secondMax = num;
//     }
//   }

//   return secondMax;
// }

// function secondLarger(arr) {
//   let max = Math.max(...arr)

//   let filtered = arr.filter(num => num !== max)

//   return Math.max(...filtered)

// }

// function mergeArray(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     result.push(arr1[i]);
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     result.push(arr2[i]);
//   }

//   return result;
// }

// let numbers = [-1, 2, -3, -4, 5];

// function minusNum(numbers) {
//   let result = [];

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       result.push(numbers[i]);
//     }
//   }

//   return result;
// }

// function oddNum(numbers) {
//   let result = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       result++;
//     }
//   }

//   return result;
// }

// function countLatter(str, letter) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       count++
//     }
//   }

//   return count;
// }

// function customMap(arr, callback) {
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }

//   return result;
// }

function calculatePrice(product) {
  return product.price * 1.12;
}

products.map(calculatePrice); 
