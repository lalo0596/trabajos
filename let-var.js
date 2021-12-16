/* 
var es una variable global y puede ser llamada desde cualquier parte del código

variable var se utiliza anteriormente, son variables glovales 
variable let ses una variable de contexto, solo vive en un bloque
de codigo.
let hace referencia a una variable local y sólo se puede acceder a ella desde el bloque en el que se encuentre, es decir afuera de { } es como si no existiera

*/

var numero = 40;
console.log(numero);

if(true) {
    var numero = 50;
    console.log(numero);
}

console.log(numero);

var texto = 'Bootcamp Java';
console.log(texto);

if(true) {
    let texto = 'cohorte 8';
    console.log(texto);
}

console.log(texto);