/* window.alert('Seja Bem Vimdo ao meu Site!')
window.confirm('Vamos confirmar seus dados?')
window.prompt('Qual é o seu nome?')
console.log('Olá! Seja bem vindo a nossa aula de JavaScript') */
/* Vocês podem usar áspas simples, duplas e acentro grave */

var nome = window.prompt('Qual é o seu nome?')
/* recebe uma informação do PROMPT */
/*  Esse sinal = não significa igual no JavaScript. Aqui o sinal de igualdade se escreve assim, ==. */

window.alert(`Seja bem vindo!${nome}`)
console.log(`Seja bem vindo! ${nome}`)