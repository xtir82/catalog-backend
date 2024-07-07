import { Router } from "express";
import fs from 'node:fs';


const router = Router();

let cartDB = [];
let cartID = 0;

router.get('/', (req, res) => {
    res.status(200).json({
        payload: [...DB],
        mensaje:'Prueba GET'
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