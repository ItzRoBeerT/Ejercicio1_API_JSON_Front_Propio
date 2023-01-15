const express = require('express');
const path = require('path');
const getTemperatura = require('./utils/axiosTime');

const app = express();
const port = 3000;

//definir rutas
const publicPath = path.join(__dirname, '../public')

//Setup el directorio estatico
app.use(express.static(publicPath))

app.get('', (req, res) => {
    res.send('Prueba');
})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'debes introducir una direccion'
        })
    }
    getTemperatura(req.query.address, (error, temperatura,descripcion) => {
        if (error) {
            return res.send({ error })
        }

        res.send({
            temperatura,
            descripcion,
            mensaje: 'prueba'
        })
    })
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
})