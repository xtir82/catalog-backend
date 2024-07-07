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

router.get('/:cartID', (req, res) => {
    res.status(200).json({
        payload: [...DB],
        mensaje:'Prueba GET'
    })
})

router.post('/', (req, res) => {
    const response = req.body

    res.status(201).json({
        ...response,
        mensaje: 'Prueba POST Cart'
    })
})

router.put('/:cartID', (req, res) => {
})

router.delete('/:cartID', (req, res) => {
})

export default router;