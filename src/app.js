import express from "express";
import ProductManager from "./Class/productManager.js";
import { __dirname } from "./utils.js";

import CartRoute from './routes/cart.router.js';
import ProductRoute from './routes/product.router.js';

//Middleware
const app = express();
const port = 8080;

app.use(express.json()); //body-parse
app.use(express.urlencoded({ extended: true }));

app.use('/api/product',  ProductRoute);
app.use('/api/cart',  CartRoute);

app.listen(port, () => {
    console.log("Servidor iniciado")
})
