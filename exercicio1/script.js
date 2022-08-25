// # Exercício 1
// Crie duas funcões que recebem como parâmetro um objeto.
// 1. A primeira deve retornar o objeto, alterando as propriedades dele para que fiquem em CAIXA ALTA.
// 2. A segunda deve retornar os valores do objeto como texto corrido.
// 3. Em seguida, crie uma funcão que recebe um objeto e um callback como parâmetros. A funcão deve passar o objeto como argumento da funcão de callback, e em seguida imprimir o valor retornado.
// Chame a funcão 3, passando como argumentos o objeto passado no arquivo `script.js`, e a funcão 1.
// Repita o processo para a funcão 2


const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}
const caixaAlta = (objeto) => {
    return {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
}

console.log(caixaAlta(objeto));
console.log("");

const corrido = (objeto) =>{
    return `Texto corrido  ${objeto.nome}, ${objeto.profissao}, ${objeto.username}, ${objeto.senha}`
}
console.log(corrido(objeto))

const imprimindoCaixaAlta = (objeto,callback)=>{
    const resposta = callback(objeto)
    console.log('Imprimindo primeira função com callback', resposta)
}
const imprimindoCorrido = (objeto,callback)=>{
    const resposta2 = callback(objeto)
    console.log('Imprimindo segunda função em callback', resposta2)
}
imprimindoCorrido(objeto,corrido)
imprimindoCaixaAlta(objeto, caixaAlta)