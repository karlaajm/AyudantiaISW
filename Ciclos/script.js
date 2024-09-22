//Ejercicio 1: Del 1 al 10.
for (let i = 1; i <= 10; i ++){
    console.log(i);
}

//Ejercicio 2: Del 10 al 1.
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//Ejercicio 3: Pares.
for (let i = 1; i <= 10; i ++){
    if (i % 2 == 0) {
        console.log(i);
    }
}

//Ejercicicio 4: Impares.
for (let i = 1; i <= 10; i ++){
    if (i % 2 != 0) {
        console.log(i);
    }
}

//Ejercicio 5: Del 1 al 10, pero solo múltiplos de 3.
for (let i = 1; i <= 10; i ++){
    if (i % 3 == 0) {
        console.log(i);
    }
}

//Ejercicio 6: Del 1 al 10, pero solo múltiplos de 5.
for (let i = 1; i <= 10; i ++){
    if (i % 5 == 0) {
        console.log(i);
    }
}

//Ejercicio 7: Del 1 al 10, pero solo múltiplos de 3 y 5.
for (let i = 1; i <= 10; i ++){
    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i);
    }
}

//Ejercicio 8: Del 1 al 10, pero solo múltiplos de 3 o 5.
for (let i = 1; i <= 10; i ++){
    if (i % 5 == 0 || i % 3 == 0) {
        console.log(i);
    }
}