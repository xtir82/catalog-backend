import { Router } from "express";
import ProductManager from "../Class/productManager.js";
import { __dirname } from "../utils.js";

const router = Router();

const productManager = new ProductManager(__dirname + '/data/product.json');

//Rutas
router.get('/', async (req,res) => {
    const respuesta = await productManager.getProducts();
    res.status(200).json({
        mensaje:'Lista de Productos Obtenida',
        respuesta: respuesta
    })
})

router.get('/:productId', async (req, res) => {
    const { productId } = req.params;

    const productFound = await productManager.getProductById(productId);
    console.log(productFound)

    res.status(201).json({
        mensaje:'Se ha agregado el Producto',
        producto: productFound,
    })
})

router.post('/', async (req,res) => {
    const productToAdd = req.body;
    await productManager.addProduct(productToAdd);

    res.status(201).json({
        mensaje: 'Prueba POST Producto'
    })
})


//Por Validar
router.put('/:id', (req, res) => {
    const productToAdd = req.body;
    console.log(productToAdd)
    //await productManager.addProduct(productToAdd);

    //id, title, description, code, price, status, stock, category, thumbsnails

    res.status(201).json({
        mensaje: 'Prueba POST Producto'
    })
})

router.delete('/:id', (req, res) => {

})

export default router;