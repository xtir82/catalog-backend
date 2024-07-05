import express from "express";
import ProductRoute from './routes/product.router.js';
import CartRoute from './routes/cart.router.js';

const app = express();

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

//Middleware
app.use(express.json()); //body-parse
//app.use(express.urlencoded({extended: true}));
app.use('/api/product',  ProductRoute);
app.use('/api/cart',  CartRoute);



