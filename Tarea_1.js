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

