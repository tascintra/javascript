function bhaskara() {
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))
    
    let rBhaskara = b**2 - 4 * a * c

    let rDelta = window.document.getElementById('rDelta')

    rDelta.innerHTML = `<h2>Resolvendo Bhaskara</h2>`
    rDelta.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p> <p>O cálculo realizado será <strong>∆ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p> <p>O valor calculado foi <strong><mark>∆ = ${rBhaskara}</mark></strong></p>`
}