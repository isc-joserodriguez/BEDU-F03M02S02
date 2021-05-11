/*
Escribir una funcion que dado un N positivo diga los primeros N números primos
*/
const isprime = require('isprime');

const getPrimes = (n) => {
    let i = 0, count = 0, arr = [];
    while (count < n) {
        if (isprime(++i)) {
            arr.push(i)
            count++;
        }
    }
    console.log(arr);
}


getPrimes(5);
getPrimes(20);