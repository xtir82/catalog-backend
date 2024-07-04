import express from "express";

const app = express();

app.listen(8080, () => {
    console.log("Servidor iniciado")
})

app.get('/', (req, res) => {
    res.status(201).json({
        mensaje:'Todo ok'
    })
})