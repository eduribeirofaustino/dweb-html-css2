
/* var valor1 = Number.parseInt (prompt("Digite um número: "))
var valor2 = Number.parseInt (prompt("Digite outro número: ")) */

/* resultado.innerHTML = `A soma dos valores é: ${valor1 + valor2} */

/* console.log(nome)
console.log(resultado) */

function cadastro () {
    var nome = document.getElementById('input-nome').value
    var resultado = document.querySelector('#resultado')

    resultado.innerHTML = `Seu nome é: ${nome}`
}