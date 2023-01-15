window.addEventListener('load',main);

let formTiempo;
let buscador;
let p1;
function main() {
    formTiempo= document.querySelector('form');
    buscador = document.querySelector('input');
    p1 = document.querySelector('#p1');
    p2 = document.querySelector('#p2');


    formTiempo.addEventListener('submit',(e)=>{
        e.preventDefault()
    
        const location = buscador.value;
    
        fetch('http://127.0.0.1:3000/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    p1.innerHTML = data.error;
                } else {
                   p1.innerHTML = 'Temperatura: '+data.temperatura.temperatura+'°';
                   p2.innerHTML = 'Tiempo: '+data.temperatura.descripcion;
                }
            })
        })
    
    })
}



