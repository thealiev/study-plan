const express = require("express");
const app = express();

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
];

// app.get("/users/:id", (req, res) => {
// const id = Number(req.params.id)  id olish
// const user = users.find(u => u.id === id)   qidirish
// res.send(user) qaytarish
// });

// ##CRUD

// app.get("/users", (req, res) => {
//   res.send(users)
// })

// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id)
//   const user = users.find(u => u.id === id)
//   res.send(user)
// })

// app.post("/users", (req, res) => {
//   users.push(newUsers);
//   res.send(users);
// });

app.del("/users:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (user) {
    user.name = req.body.name;
  }

  res.send(user);
});

app.listen(3000, () => {
  console.log("server runnning...");
});
