//1.
var saludar = function(nombre){
    return "Hola" + nombre + ", ahora estas en la matrix";
}

console.log(saludar("Patricia"));

//2.
var numDecimal = prompt("Ingrese numero decimal: ");
var numEntero = prompt("Ingrese numero entero: ");

var suma = parseFloat(numDecimal)+parseInt(numEntero);

console.log("El resultado de la suma es " + suma);

//3.
var num1 = prompt("Ingrese primer numero: ");
var num2 = prompt("Ingrese segundo numero: ");

var suma = parseInt(num1) + parseInt(num2);

console.log("El resultado de la suma es: " + suma)

var num3 = prompt("Ingrese tercer numero: ");

var multiplicacion = suma * parseInt(num3);

console.log("Resultado total: " + multiplicacion)