function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('input#txtano')
    var res = document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value == 0 || fAno.value < 1900 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var rSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''

        // COLOCANDO IMAGEM NA PAGINA EM JS
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (rSex[0].checked) {
            if (idade >= 0 && idade <= 12) {
                // CRIANÇA
                genero = 'criança'
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-m.png')
                genero = 'jovem'
            } else if (idade < 50) {
                // ADULTO
                img.setAttribute('src', 'foto-adulto-m.png')
                genero = 'homem'
            } else {
                // IDOSO
                img.setAttribute('src', 'foto-idoso-m.png')
                genero = 'idoso'
            }

        } else {
            if (idade >= 0 && idade <= 12) {
                // CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png')
                genero = 'criança'
            } else if (idade < 21) {
                // JOVEM
                img.setAttribute('src', 'foto-jovem-f.png')
                genero = 'jovem'
            } else if (idade < 50) {
                // ADULTA
                img.setAttribute('src', 'foto-adulto-f.png')
                genero = 'mulher'
            } else {
                // IDOSA
                img.setAttribute('src', 'foto-idoso-f.png')
                genero = 'idosa'
            }
        }
        // res.style.textAlign = 'Center' // CENTRALIZA O TEXTO COM JS
        res.innerHTML = `Detectamos <strong>${genero}</strong> com ${idade} anos.`
        res.appendChild(img)
        img.style.padding = '10px 1px 4px 1px'
    }
}