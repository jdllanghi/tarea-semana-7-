//escribe una funcion que reciba el año de 
//nacimiento como argumento y muestre en 
//un alert la edad correspondiente
'use strict'
function calcularEdad(añodenacimiento){
    //calcular la edAd

	
    let edad = 2023 - añodenacimiento;
    //mostarar la edadd en un alert
    alert("Tu edad es: "+ edad + " años");
}
let añodenacimiento = Number(prompt('íngrese el año de nacimiento'))
calcularEdad(añodenacimiento)
