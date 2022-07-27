function verificar() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))

    rBissexto = window.document.getElementById('rBissexto')

    rBissexto.innerHTML = ""
    rBissexto.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        rBissexto.innerHTML += `<p>O ano de ${ano} <strong><mark id="bissexto">É BISSEXTO</mark></strong> &#x2705;</p>`
    } else {
        rBissexto.innerHTML += `<p>O ano de ${ano} NÃO <strong><mark id="naobissexto">É BISSEXTO</mark></strong> &#x274C;</p>`
    }
}