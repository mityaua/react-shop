import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8888';

// Запрос за продуктами
export const getProducts = () =>
  axios.get('/products').then(({ data }) => data);

// Запрос на добавление продукта
export const addProduct = payLoad =>
  axios
    .post('/products', payLoad)
    .then(({ data }) => data);

// Запрос на удаление продукта
export const deleteProduct = id =>
  axios.delete(`/products/${id}`).then(({ data }) => data);

// Запрос за корзиной
export const getCart = () =>
  axios.get('/cart').then(({ data }) => data);
