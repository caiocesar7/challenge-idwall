/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

const isPrime = require('../../utils/isPrime')

const sumPrimes = n => {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, c) => {
        if (isPrime(c)) return c + acc
        return acc
    }, 0)
}

module.exports = sumPrimes
