import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json({
        mensaje:'Prueba GET'
    })
})

router.post('/', (req, res) => {
    const response = req.body

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