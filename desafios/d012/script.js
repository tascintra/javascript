function verificar () {
    let iPrecoAnterior = window.prompt('Qual era o preço anterior do produto?')
    let iPrecoAtual = window.prompt('Qual é o preço atual do produto?')

    let cPrecoAnterior = Number(iPrecoAnterior.toString().replace(",", "."))
    let cPrecoAtual = Number(iPrecoAtual.toString().replace(",", "."))
    let rPreco = window.document.getElementById('rPreco')

    let difPreco = cPrecoAtual - cPrecoAnterior
    let difPerc  = ((difPreco / cPrecoAtual) * 100).toFixed(2)

    rPreco.innerHTML = ""
    rPreco.innerHTML = `<h2>Analisando os valores informados</h2>`
    rPreco.innerHTML += `<p>O produto custava ${cPrecoAnterior.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} e agora custa ${cPrecoAtual.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p>`

    if (difPreco > 0) {
        rPreco.innerHTML += '<p>Hoje o produto está mais caro.</p>'
        rPreco.innerHTML += `<p>O preço subiu ${difPreco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>`
        rPreco.innerHTML += `<p>Uma variação de ${difPerc.toLocaleString().replace(".", ",")}% pra cima.</p>`
    } else if (difPreco == 0) {
        rPreco.innerHTML += '<p>Não houve alteração de preço no produto.</p>'
    } else {
        rPreco.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        rPreco.innerHTML += `<p>O preço caiu ${Math.abs(difPreco).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p>`
        rPreco.innerHTML += `<p>Uma variação de ${Math.abs(difPerc).toLocaleString()}% pra baixo.</p>`
    }
}