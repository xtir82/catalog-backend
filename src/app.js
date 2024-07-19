import express from "express";
import { __dirname } from "./utils.js";
import handlebars from "express-handlebars";
import morgan from "morgan";

//Routes
import CartRoute from './routes/cart.router.js';
import ProductRoute from './routes/product.router.js';
import RealTimeProducts from './routes/realtimeproducts.router.js';

const app = express();
const port = 8080;

//Template Engine
app.engine('handlebars', handlebars.engine()); //Inicializamos el template engine, en este caso handlebars
app.set('views', __dirname + '/views'); //Configuramos la ruta de las views
app.set('view engine', 'handlebars');

//Middleware
app.use(express.json()); //body-parse
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use('/api/product',  ProductRoute);
app.use('/api/cart',  CartRoute);
app.use('/api/realTimeProducts', RealTimeProducts);

app.listen(port, () => {
    console.log("Servidor iniciado en puerto " + port)
})
