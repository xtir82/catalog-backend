import { Router } from "express";
import CartManager from "../Class/cartManager.js";
import { __dirname } from "../utils.js";

const router = Router();

const cartManager = new CartManager(__dirname + '/data/cart.json');

//Rutas
router.get('/', async (req,res) => {
    const respuesta = await cartManager.getCarts();
    res.status(200).json({
        mensaje:'Lista de Carritos Obtenida',
        respuesta: respuesta
    })
})

router.get('/:cartID', async (req, res) => {
    const cartId = parseInt(req.params.cartID); //Convertimos el queryparams de string a number
    const cartFound = await cartManager.getCartById(cartId);

    res.status(200).json({
        mensaje:`Carrito con el id ${cartId}`,
        producto: cartFound,
    })
})

router.post('/', async (req, res) => {
    await cartManager.addCart();

    res.status(201).json({
        mensaje: 'Prueba POST Cart'
    })
})

router.post('/:cartId/product/:productId', async (req, res) => {
    const cartId = parseInt(req.params.cartId); //Convertimos el queryparams de string a number
    const productId = parseInt(req.params.productId);
    const quantity = req.body.quantity;

    await cartManager.addProductToCart(cartId, productId, quantity);

    res.status(201).json({
        mensaje: 'Prueba POST Cart'
    })
})

router.put('/:cartID', (req, res) => {
})

router.delete('/:cartID', (req, res) => {
})

export default router;