const axios = require('axios');


const timeAxios = (direccion, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=de2d50a87c6d53ad45cef9679c49f16e&query=' + direccion;
    axios.get(url)
        .then(response => {
            let data = response.data.current;
            callback(undefined,{
                temperatura: data.temperature,
                descripcion: data.weather_descriptions
            })
        })
        .catch(error => {
            callback('Ha ocurrido un error', undefined)
        });
}
module.exports = timeAxios