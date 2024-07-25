import { Router } from "express";
import { __dirname } from "../utils.js";

const router = Router();

//Rutas
router.get('/', async (req,res) => {
    /*try {
        const respuesta = await cartManager.getCarts();
        res.status(200).json({
            mensaje:'Lista de Carritos Obtenida',
            respuesta: respuesta
        })
    } catch(error) {
        res.status(404).send('Ops! hay un problema: ' + error);
    }*/
   //const {obj} = req.query; //Destructuramos
    res.render('home', {
        productos: [],
    }) //Renderiza la vista
})

router.post('/', async (req,res) => {
    try {
        const productToAdd = req.body;
        await productManager.addProduct(productToAdd);
        res.status(201).json({
            mensaje: 'Prueba POST Producto'
        })
    } catch(error) {
        res.status(404).send('Ops! hay un problema: ' + error);
    }
})

export default router;