//1- Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;
while (contador<11) {
    console.log(contador);
    contador++;
}

//2- Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contadorDos = 10;
while (contadorDos >=0) {
    console.log(contadorDos);
    contadorDos--;
}
//3- Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numero = parseInt(prompt("Ingresar un numero"))
let contadorTres = 0; 
while(contadorTres <= numero){
    console.log(contadorTres);
    contadorTres++
}