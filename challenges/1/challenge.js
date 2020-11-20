/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (arr, ...values) => {
    return values.reduce((a, b) => a + b, arr)
}

module.exports = sumArguments
