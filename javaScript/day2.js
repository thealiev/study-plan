// const users = [
//   {
//     id: 1,
//     name: "Ali",
//     age: 20
//   },
//   {
//     id: 2,
//     name: "Vali",
//     age: 25
//   },
//   {
//     id: 3,
//     name: "Sardor",
//     age: 30
//   }
// ];


// function deleteUsers(id) {
//     for(let i = 0; i < users.length; i++) {
//         if(users[i].id === id) {
//             users.splice(i,1)
//             break
//         }
//     }

//     return users
// }


// function updateUser(id, newUser, newAge) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === id) {
//       users[i].name = newUser
//       users[i].age = newAge
//     }
//   }


//   return users
// }

// const numbers = [10, 5, 7, 20, 50, 3, 1, 8];

// const evenNumbers = numbers.filter(num => num % 2 === 0)
// console.log(evenNumbers);

// Faqat 18+ yoshdagi userlarni chiqar:

// const users = [
//   { id: 1, name: "Ali", age: 17 },
//   { id: 2, name: "Vali", age: 25 },
//   { id: 3, name: "Sardor", age: 30 }
// ];

// const adultAge = users.filter(user => user.age >= 18)


// const numbers = [1, 2, 3, 4, 5];

// const addNum = numbers.map(num => num * 2)

// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" }
// ];

// const newArr = users.map(user => user.name)


// const users = [
//   { id: 1, name: "Ali" },
//   { id: 2, name: "Vali" },
//   { id: 3, name: "Sardor" }
// ];

// const findUserId = users.find(user => user.id === 2)

// const checkAge = users.filter(user => user.age >= 20)


// const numbers = [10, 20, 30, 40];

// const total = numbers.reduce((acc, num) => {
//   return acc + num
// }, 0)

// console.log(total);


// const numbers = [5, 10, 2, 99, 30];

// const bigNum  = numbers.reduce((max, num) => {
//        return max > num ? max : num
// }, 0)

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const result = [...arr1, ...arr2]
// console.log(result);

// const user = { id: 1, name: "Ali" };

// const newUser = {...user, age: 25}


// const user = {
//   id: 1,
//   name: "Ali",
//   age: 18
// };


// const {name, age} = user

// const result = users
// .filter(user => user.age >= 18)
// .map(user => user.name)

// console.log(result);

