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

//4.
var cantKm = prompt ("Ingrese cantidad de kilometros recorridos: ");
var cantLitrosCombus = prompt ("Ingrese cantidad de litros de combustible consumidos: ")

var gasto = parseInt(cantKm) / parseFloat(cantLitrosCombus);

console.log("Cantidad consumo de combustible por kilometro: " + gasto)

//5.
var tempFaren = prompt("Ingrese temperatura: ");

var celcius = (5/9) * parseFloat((tempFaren-32))

console.log("Temperatura en Celcius es igual " + celcius)

//6.
var num1 = prompt("Ingrese primer numero: ");
var num2 = prompt("Ingrese segundo numero: ");
var num3 = prompt("Ingrese tercer numero: ");

var suma = parseFloat(num1)+parseFloat(num2)+parseFloat(num3);
var promedio = suma / 3;

console.log("El resultado del promedio es: " + promedio)


//7.
var num1=prompt("Ingrese numero");

var porcentaje=(15/100)*parseInt(num1);

var resultado= parseFloat(num1)-porcentaje;

console.log("Número descontando el 15% queda: " + resultado);