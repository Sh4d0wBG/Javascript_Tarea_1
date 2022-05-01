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

//13.
var edad = prompt("Ingrese su edad");
var cantArtComp = prompt("Ingrese cantidad de articulos comprados en la tienda")

console.log("Su edad es: "+edad)
console.log("Usted compro "+cantArtComp+ " articulos")

if((edad>18) && (cantArtComp>1)){
    console.log("True");
}else{
    console.log("False");
}

//14.
var frase = prompt("Ingrese texto");

console.log(frase)

numCaracteres = frase.length;

if(numCaracteres%2===0){
    console.log("Par: True");
}else{
    console.log("Impar: False");


//15.
var palabraUno = prompt("Escriba una primer palabra");
var palabraDos = prompt("Escriba una segunda palabra");

console.log("Primer palabra: "+ palabraUno);
console.log("Segunda palabra: "+ palabraDos);

numCaracUno = palabraUno.length;
numCaracDos = palabraDos.length;

if(numCaracUno<numCaracDos){
    console.log("Menor: True");
}else{
    console.log("Mayor: False");
}}



//16.
var nomUno = prompt("Ingrese su nombre primer usuario");
var nomDos = prompt("Ingrese su nombre segundo usuario");

console.log(nomUno)
console.log(nomDos)

letranomUno = nomUno.charAt(0)
letranomDos = nomDos.charAt(0)

if(letranomUno===letranomDos || nomUno[nomUno.length-1] == nomDos[nomDos.length-1]){
    console.log("True");
}else{
    console.log("False");
}

//17.
var num= parseInt(prompt("Ingrese un numero"));

valorAbsoluto= Math.abs(num);

console.log("Numero ingresado: "+num)

//18.
var num1 = parseInt(prompt("Ingrese un numero"));
var num2 = parseInt(prompt("Ingrese otro numero"));

console.log("Primer numero: "+num1)
console.log("Segundo numero: "+num2)

if(num1>num2){
    console.log(num1 + " es mayor");
}else{
    console.log(num2+ " es mayor");
}