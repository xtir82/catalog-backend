import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

app.get('/', (req, res) => {
    res.status(201).json({
        mensaje:'Prueba GET'
    })
})

app.post('/', (req, res) => {
    const response = req.body

    res.json({
        ...response,
        mensaje: 'Prueba POST'
    })
})