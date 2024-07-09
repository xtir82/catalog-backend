import { Router } from "express";
import ProductManager from "../Class/productManager.js";
import { __dirname } from "../utils.js";

const router = Router();

export const productManager = new ProductManager(__dirname + '/data/product.json');

//Rutas
router.get('/', async (req,res) => {
    const respuesta = await productManager.getProducts();
    res.status(200).json({
        mensaje:'Lista de Productos Obtenida',
        respuesta: respuesta
    })
})

router.get('/:productId', async (req, res) => {
    const productId = parseInt(req.params.productId); //Convertimos el queryparams de string a number
    const productFound = await productManager.getProductById(productId);

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

router.put('/:productId', async (req, res) => {
    const productToEdit = parseInt(req.params.productId);
    const productReplacement = {
        id: productToEdit,
        title: req.body.title,
        description: req.body.description,
        code: req.body.code,
        price: req.body.price,
        status: req.body.status,
        stock: req.body.stock,
        category: req.body.category
    }
    await productManager.editProduct(productReplacement);

    res.status(201).json({
        mensaje: 'Prueba PUT Producto'
    })
})

router.delete('/:productId', async (req, res) => {
    const productToDelete = parseInt(req.params.productId);
    await productManager.deleteProduct(productToDelete);

    res.status(201).json({
        mensaje: 'Prueba DELETE Producto'
    })
})

export default router;