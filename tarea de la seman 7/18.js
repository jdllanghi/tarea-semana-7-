'use strict'
// hacer una funcion que reciba dos parametros (multip y multi) ejecute el bucle para realizar la suma necesaria para lograr la mult.
//Al final returnamos la suma.
function multiplicar (multiplicador, multiplicando) { 
    let suma = 0;

for(let i = 0; i < multiplicador; i++){

    suma = suma+multiplicando;
}
return suma;
}



let multiplicador = Number(prompt("", ""));
let multiplicando = Number(prompt("", ""));

let resultado =multiplicar(multiplicador,multiplicando);
alert (resultado);
 
