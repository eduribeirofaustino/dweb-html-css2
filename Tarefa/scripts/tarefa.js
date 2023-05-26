
function resultado1 (){
var valor1 = Number.parseInt (document.getElementById('input-valor1').value)
var valor2 = Number.parseInt (document.getElementById('input-valor2').value)
var resultado = document.querySelector('#resultado1')
resultado.innerHTML = `Seu nome é: ${valor1 + valor2}`
}

function resultado2 (){
    var valor3 = Number.parseInt (document.getElementById('input-valor3').value)
    var valor4 = Number.parseInt (document.getElementById('input-valor4').value)
    var resultado = document.querySelector('#resultado2')
    resultado.innerHTML = `Seu nome é: ${valor3 - valor4}`
    }