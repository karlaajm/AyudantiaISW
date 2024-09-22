const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

//Ejercicio 1
if ((numero1 > numero2) && (numero1 > numero3)) {
    console.log("El número " + numero1 + " es el mayor de los 3 números");
} else if ((numero2 > numero1) && (numero2 > numero3)) {
    console.log("El número " + numero2 + " es el mayor de los 3 números");
} else {
    console.log("El número " + numero3 + " es el mayor de los 3 números");
}

//Ejercicio 2
if ((numero1 < numero2) && (numero1 < numero3)) {
    console.log("El número " + numero1 + " es el menor de los 3 números");
} else if ((numero2 < numero1) && (numero2 < numero3)) {
    console.log("El número " + numero2 + " es el menor de los 3 números");
} else {
    console.log("El número " + numero3 + " es el menor de los 3 números");
}

//Ejercicio 3
if (numero1 % 2 == 0){
    console.log("El número 10 es par");
} else {
    console.log("El número 10 es impar");
}

//Ejercicio 4
if (numero2 % 2 == 0) {
    console.log("El número 20 es par");
} else {
    console.log("El número 20 es impar");
}

//Ejercicio 5
if (numero3 % 2 == 0) {
    console.log("El número 30 es par");
} else {
    console.log("El número 30 es impar");
}

//Ejercicio 6
if (numero1 % 5 == 0) {
    console.log("El número 10 es múltiplo de 5");
}

//Ejercicio 7
if (numero2 % 5 == 0) {
    console.log("El número 20 es múltiplo de 5");
}

//Ejercicio 8
if (numero3 % 5 == 0) {
    console.log("El número 30 es múltiplo de 5");
}