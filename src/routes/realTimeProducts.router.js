import { Router } from "express";
import { __dirname } from "../utils.js";

const router = Router();

//Rutas
router.get('/', (req,res) => {
    res.render('realTimeProducts', {})
    /*try {
        const respuesta = await cartManager.getCarts();
        res.status(200).json({
            mensaje:'Lista de Carritos Obtenida',
            respuesta: respuesta
        })
    } catch(error) {
        res.status(404).send('Ops! hay un problema: ' + error);
    }*/
})

export default router;