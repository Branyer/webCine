const boton = document.getElementById('boton');
const input = document.getElementById('input');
const buscador = document.getElementById('buscador');
let isClicked = false;


const desplegarInput = () =>{
    if(!isClicked){

        boton.style.width = '20%';
        input.style.display = 'block';
        buscador.style.width = '15%';
        isClicked = true;
    }else{
        boton.style.width = '100%';
        input.style.display = 'none';
        buscador.style.width = '2%';
        isClicked = false;
    }
};

boton.onclick = desplegarInput;



