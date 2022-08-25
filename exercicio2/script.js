// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:
// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2. Crie uma `const metades`, e guarde o valor do array nesta const;

const sequenciaDeNumeros = [3, 6, 7, 9, 12, 13, 16, 19]
console.log('Sequencia', sequenciaDeNumeros)

const triplos = sequenciaDeNumeros.map((numero )=>{
    return numero * 3
})
console.log('Triplos', triplos)

const metade = sequenciaDeNumeros.map((numero)=>{
return numero / 2
})
console.log('Dividido pela metade', metade)