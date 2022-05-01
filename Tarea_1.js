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

//8.
var primerPalabra = prompt("Ingrese su primera palabra: ");
var segundaPalabra = prompt("Ingrese su segunda palabra: ");

console.log(primerPalabra + " " + segundaPalabra)

//9.
var text=prompt("Ingrese texto: ")

console.log("La primera letra de su texto es: " + text.charAt(0));

numcar = text.length;

var indice=prompt("Ingrese un numero positivo menor a " + numcar);

console.log("La letra en esa posición es: " + text.charAt(parseInt(indice)));

//10.
var numShows = parseInt(prompt("¿Cuantos shows musicales ha visto en el ultimo año?"))

console.log("Numero de shows musicales vistos en el ultimo año: " + numShows)

if(numShows>3){
    console.log("True");
}else{
    console.log("False");
}

//11.
var dia = parseInt(prompt("Ingrese dia (DD)"));
var mes = parseInt(prompt("Ingrese mes (MM)"));
var año = parseInt(prompt("Ingrese año (AAAA)"));

console.log (dia+"/"+mes+"/"+año)


//12.
var numInt = parseInt(prompt("Ingrese un numero"));

console.log("El numero es: "+numInt)

if(numInt%2===0){
    console.log("Par: True");
}else{
    console.log("Impar: False");
}