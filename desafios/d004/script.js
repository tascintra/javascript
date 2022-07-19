function troco() {
    let produto = window.prompt('Qual produto você está comprando?')
    let preco = Number(window.prompt(`Quando custa o/a ${produto} que você está comprando?`))
    let pagto = Number(window.prompt(`Qual valor você dará para pagar o/a ${produto} de ${preco.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}?`))
    let troco = pagto - preco
    window.alert(`Você comprou o/a ${produto} que custou ${preco.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}.\nDeu ${pagto.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} de troco.\nVolte Sempre!`)
}