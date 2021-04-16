const express = require('express');
const app = express();
const port = 8888;

const users = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Mikki' },
];

// Запрос на главную страницу
app.get('/', (req, res) => {
  res.send('Hello from my own server!');
});

// Запрос на юзеров
app.get('/users', (req, res) => {
  res.json(users);
});

// Запись юзеров
app.post('/users', (req, res) => {
  users.push()

  res.json(users)
});

// Слушает порт
app.listen(port, () => {
  console.log(`Example listening at ${port}`);
});

// Запрос на юзеров
app.get('*', (req, res) => {
  res.send('404');
});