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

/* 
operadores relacionales o de comparacion 
    Mayor que: a > b            a es mayor que b
    Menor que: a < b            a es mejor que b
    Mayor o igual que: a >= b   a es mayor o igual a   b
    Menor o igual que:  a <= b  a es menor o igual a   b   
    Igual:     a == b           a es igual a b
    Distinto:  a != b           a es diferente de b 
    Operador estricto: ===
    operador diferente estricto: !==
    */

    let numero1 = 22;
    let numero2 = 15;

    console.log('mayor que:  ' + (numero1 > numero2));
   
    console.log('menor que:  ' + (numero1 < numero2));

    console.log('menor o igual que:  ' +( numero1 <= numero2));

    console.log('mayar o igual que:  ' + (numero1 >= numero2));

    console.log('igual que:  ' + (numero1 == numero2));

    console.log('Distinto:  ' + (numero1 != numero2));