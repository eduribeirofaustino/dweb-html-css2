function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoUsuario = Number(document.getElementById('input_ano').value)
    var resultado = document.getElementById('resultado')
    var idade = anoAtual - anoUsuario
    
    resultado.innerHTML = `<p>Você esta com ${idade} anos</p>` 

    var input_radio = document.getElementsByName('radsex')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id','foto')

    console.log(input_radio)

    if(input_radio[0].checked){
        genero = 'Homem'

        if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/boy.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'imagens/teenboy.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/man.jpg')
        } else {
            img.setAttribute('src', 'imagens/manold.jpg')
        }
        
        resultado.appendChild(img)
    }

     else{
        genero = 'Mulher'
        if (idade >= 0 && idade < 12){
            img.setAttribute('src', 'imagens/girl.jpg')
        } else if (idade < 21){
            img.setAttribute('src', 'imagens/teengirl.jpg')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagens/woman.jpg')
        } else {
            img.setAttribute('src', 'imagens/womanold.jpg')
        }
        resultado.appendChild(img)
    }
}