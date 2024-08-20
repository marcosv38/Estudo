const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

let contador = 0;

while(contador<listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomPom;
    contador++;
}
