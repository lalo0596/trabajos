/* 
operador aritmeticos nos sirven para hacer operaciones 
+ sirve para sumar o concatenar 
- sirve para restar numeros
* sirve para multiplicar 2 numeros 
% modulo nos sirve para obtener el residuo de una division 
/ division nos sirve para dividir dos numeros

saca el residuo, saca muchos pares o inpares te das cuenta 


parseInt =  sirve para convertir un string o cadena de texto a número

*/

//const numero1 = 34;
//const numero2 = 5;
//const suma = numero1 +numero2;

//console.log(suma); opcion 1 
//console.log(numero1 + numero2); opcion 2 

const numero1 = parseInt(prompt('Ingresa el numero 1'));
const numero2 = parseInt(prompt('Ingresa el numero 2'));

const suma = numero1 + numero2;

console.log('suma:  ' + suma);
 
const numero3 = parseInt(prompt('Ingresa el numero 3'));
const numero4 = parseInt(prompt('Ingresa el numero 4'));

const resta = numero3 - numero4;

console.log('resta:  ' + resta);

const numero5 = parseInt(prompt('Ingresa el numero 5'));
const numero6 = parseInt(prompt('Ingresa el numero 6'));

const multiplicacion = numero5 * numero6;

console.log('multiplicacion:  ' + multiplicacion);

const numero7 = parseInt(prompt('Ingresa el numero 7'));
const numero8 = parseInt(prompt('Ingresa el numero 8'));

const divicion = numero7 / numero8;

console.log('divicion:  ' + divicion);

/* 
Operadores logicos  Verdadero (v) falso (f)


&& AND  <expresion_1> y <expresion_2>

v | v = V     
v | f = F
f | v = F
f | f = F 


|| ORD <expresion_1>  o  <expresion_2>

v | v = V
v | f = V 
f | v = V
f | f = F 

!  NOT <expresion> no <expresion>

v = F
f = V


*/