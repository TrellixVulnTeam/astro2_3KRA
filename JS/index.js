console.log('soy el archivos de javascript');
let nombre = 'sofia'
let apellido ='rodriguez'

console.log(nombre);
console.log(apellido);

console.log(nombre + ' ' + apellido);

let numuno = Number('100');
let numdos = Number('100');

console.log(numuno + numdos);

let pais = 'argentina'


//concatenar
console.log('mi nombre es:' + nombre + ' y mi apellido es:' + apellido + ' .vivo en:' + pais);

//TS 
console.log(`mi nombre es: ${nombre} vivo en ${pais} `);

let valoruno = Number('10')
let valordos = Number('10')
let resultado = valoruno * valordos;

console.log(`El resultado de la resta es: ${resultado}`);

resultado = valoruno + valordos;
console.log('El resultado de la suma es:' + resultado);

resultado = valoruno - valordos;
console.log('El resultado de la resta es:' + resultado);

resultado = valoruno / valordos;
console.log('el valor de la division es:' + resultado);


let megusta = 0
megusta++;
megusta++;
megusta++;
megusta++;
megusta++;

console.log(megusta);

//DECREMENTO

megusta--;
console.log(megusta);

//arreglo de array 
let nombres = ['juan', 'martin', 'sofia', 'belen', 'carina']

//indice de un array 
console.log(nombres[2]);

console.log(nombres.length);

nombres.push('clarisa');

console.log(nombres.length);
console.log(nombres[5]);

console.table(nombres);
console.log(nombres);

console.log('==============');

//CONDICIONALES- 
//OPCION DE CAMINOS A TOMAR

let edad = 18;
let autorizado = 15;

if (edad>autorizado) {
    console.log('puedes entrar a la fiesta');
    
}

if (edad<15) {
    console.log('no puedes entrar, segui participando');
    
}

if (edad == 15) {
    console.log('pasas pero raspando');
    
}

//lo anterior con prompt

/* let edades = Number(prompt('por favor ingrese su edad'));
let autorizados = 15;

if (edades>autorizados) {
    console.log('puedes entrar a la fiesta');
    
}

if (edades<15) {
    console.log('no puedes entrar, segui participando');
    
}

if (edades == 15) {
    console.log('pasas pero raspando');
    
}

con mas de una condicion


if (edades == 15) {
console.log('pasas pero raspando') && () && ();{

}
    */

// operador modulo

let numero = Number(prompt('introduce un numero'));

if (numero % 3 == 0) {
    console.log(numero);
    console.log('el numero ingresado es IMPAR');
}
else{
    console.log('el numero ingresado es PAR');
}

let resultadox = numero / 3;

console.log( 'El resultado de la dicision es:', resultadox );

