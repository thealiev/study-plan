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

// const fs = require("fs");

// fs.writeFile("hello.txt", "hello world", (err) => {
//   if (err) throw err;
//   console.log("fayl yartildi");
// });

// const fs = require("fs");

// fs.readFile("hello.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// fs.appendFile("hello.txt", "hello dinazavor", (err) => {
//   if (err) throw err;
//   console.log("salom");
// });

// fs.unlink("hello.txt", (err) => {
//   if (err) throw err;
//   console.log("folder ochdi");
// });

// fs.mkdir("testFolder", (err) => {
//   if (err) throw err;
//   console.log("fayl yasaldi");
// });

// fs.rmdir("testFolder", (err) => {
//   if (err) throw err;
//   console.log("fayl ochdi");
// });

// fs.readdir("nodeJS", (err) => {
//   if (err) throw err;
//   console.log("korildi");
// });

// const obj = {
//   name: "Ali",
//   age: 20,
// };

// const jsonData = JSON.stringify(obj);

// fs.writeFile("data.json", jsonData, (err) => {
//   if (err) throw err;
//   console.log("tayyor");
// });

// const obj = {
//   name: "Ali",
//   age: 20,
// };

// fs.readFile("data.json", "utf-8", (err, data) => {
//   if (err) throw err;

//   const obj = JSON.parse(data);
//   console.log(data);
// });

// const http = require("http");
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   res.end("hello world");
// });

// server.listen(PORT, "localhost", () => {
//   console.log(`server running`);
// });

// const http = require("http");
// const app = express();
// const PORT = 3000;

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end("hello world");
//   } else if (req.url === "/about") {
//     res.end("hello world");
//   } else if (req.url === "/contact") {
//     res.end("contact page");
//   } else {
//     res.end("404 nout found");
//   }

// });

// const server = http.createServer((req, res) => {
//   console.log("URL:", req.url);
//   console.log("Method:", req.method);

//   res.end("OK");
// });

// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   const name = req.query.name;
//   const age = req.query.age;

//   res.send(`Name: ${name}, ${age}`);
// });

// app.listen(port, () => {
//   console.log(`server running ${port}`);
// });

const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

// app.get("/date", (req, res) => {
//   res.send(new Date().toLocaleString());
// });

// app.get("/random", (req, res) => {
//   const random = Math.floor(Math.random() * 180) + 1;

//   res.send(random);
// });

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = Math.random() > 0.5;

//     if (success) {
//       resolve("ishlavotti");
//     } else {
//       reject(new Error("ishlamayapti"));
//     }
//   }, 1000);
// });

// myPromise
//   .then((result) => console.log("success:", result))
//   .catch((error) => console.log("error", error.message));

// const promise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("ish tugadi");
//   }, 1000);
// });

// async function test() {
//   const result = await promise;
//   console.log(result);
// }

// test();

fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) throw err;
  res.end(data);
});

app.listen(port, () => {
  console.log(`server running ${port}`);
});
