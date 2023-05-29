function media() {
    var nome = prompt('Qual e o seu nome?')
    var nota1 = Number.parseInt (prompt(`Qual foi a sua primeira nota do aluno: ${nome}`))
    var nota2 = Number.parseInt (prompt(`Qual foi a sua primeira nota do aluno ${nome}`))

   var media = (nota1 + nota2) / 2

   var situacao = media >= 7?'Aprovado':'Reprovado'
   
   resultado.innerHTML = `Calculando a média final de ${nome}`
   resultado1.innerHTML = `As notas obtidas foram ${nota1} e ${nota2}`
   resultado2.innerHTML = `A média de final será ${media}`
   resultado3.innerHTML = `O aluno ${nome} está ${situacao}.`
}