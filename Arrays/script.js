//Ejercicio 1
function sumatoria (arreglo) {
    let sum = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sum = sum + arreglo[i];
    }
    return console.log("La sumatoria del arreglo es: " + sum);
}

const numeros = [1,2,3,4,5,6,7];
sumatoria(numeros);

//Ejercicio 2
function promedio (arreglo) {
    let sum = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sum = sum + arreglo[i];
    }
    let prom = sum / arreglo.length; 
    return console.log("El promedio del arreglo de números es: " + prom);
}

const lista = [1,2,3,4,5,6,7];
promedio(lista);

//Ejercicio 3
function mayusculas (arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        arreglo[i] = arreglo[i].toUpperCase();
    }
    return console.log(arreglo);
}

const pasises = ["CHile","arGENtina","Perú","bOLIvia","Nicaragua","Estados Unidos","frAncia"];
mayusculas(pasises);

//Ejercicio 4
function pares (arreglo) {
    const arrayNuevo = [];
    for (let i = 0; i <= arreglo.length; i++){
        if (arreglo[i] % 2 == 0) {
            arrayNuevo.push(arreglo[i]);
        }
    }
    return console.log(arrayNuevo);
}

const arrayNumeros = [0,1,2,3,4,5,6,7,8,9,10];
pares(arrayNumeros);