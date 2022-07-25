function desconto() {
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let iPreco = window.prompt(`Qual é o preço de ${produto}?`)

    let cPreco = Number(iPreco.toString().replace(",", "."))

    let desconto = cPreco * 0.1

    let fPreco = cPreco - desconto

    let rDesconto = window.document.getElementById('rDesconto')

    rDesconto.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    rDesconto.innerHTML += `<p>O preço original era ${cPreco.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p> <p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} de desconto (-10%).</p> <p>No fim, você vai pagar ${fPreco.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})} no produto ${produto}.</p>`
}