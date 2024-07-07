import { Router } from "express";
import fs from 'node:fs';

const router = Router();

let productDB = [];
let productID = 0;

async function getFile(){
    const infoFile = await fs.promises.readFile('./src/public/product.json', 'utf-8')
    productDB.push(JSON.parse(infoFile));
}
getFile();

router.get('/', (req, res) => {
    getFile()
    res.status(200).json({
        payload: [...productDB],
        mensaje:'Prueba GET'
    })
})

router.get('/:productId', (req, res) => {
    res.status(200).json({
        payload: [...productDB],
        mensaje:'Prueba GET'
    })
})

router.post('/', (req, res) => {
    const response = req.body

    //id, title, description, code, price, status, stock, category, thumbsnails

    res.status(201).json({
        ...response,
        mensaje: 'Prueba POST Producto'
    })
})
router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

export default router;