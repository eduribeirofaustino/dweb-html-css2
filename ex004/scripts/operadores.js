var valor1 = 2 
var valor2 = 5
var valor3 = 10
var valor4 = Number.parseInt('1')

/* String -> Textos -> Precisam estar em aspas */

console.log(typeof valor1)
console.log(typeof valor4)

var resultado = valor4 + valor1 + valor2

console.log(typeof valor4)


/* Quando tentamos realizar a soma entre um number e uma String o JavaScript faz uma concatenação */

console.log(`O resultado da operação é : ${valor4 + valor1 + valor2}`)
console.log(`O resultado da operação é : ${resultado}`)