/* 
condicionales se utilizan tomar deciciones dentro de 
nuestro programa 
*/

/* 
if (condicion) {
    codigo 
    codigo 
    codigo 
    codigo
}

document.write muestra en html sin una ventana emergente 
*/
const edad = parseInt(prompt('Ingresa tu edad'));

if(edad >= 18 && edad <30) {
    document.write('Eres un joven.');
} else if (edad >=30 && edad < 60){
    document.write('eres un adulto.');

} else if (edad >= 60) {
    document.write('eres un adulto mayor ');
}   else {
    document.write('eres un niño');
}

