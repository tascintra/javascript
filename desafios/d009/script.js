function reajustar() {
    let funcionario = window.prompt('Qual é o nome do funcionário?')
    let iSalario = window.prompt(`Qual é o salário de ${funcionario}?`)
    let iReajuste = window.prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem?`)

    let cSalario = Number(iSalario.toString().replace(",", "."))
    let cReajuste = Number(iReajuste.toString().replace(",", "."))

    let reajuste = cSalario * (cReajuste/100)

    let salReajustado = cSalario + reajuste

    let rReajuste = window.document.getElementById('rReajuste')

    rReajuste.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`
    rReajuste.innerHTML += `<p>O salário original era ${cSalario.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}.</p> <p>Com o aumento de ${cReajuste}% o salário vai aumentar ${reajuste.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} no próximo mês.</p> <p>E a partir daí, ${funcionario} vai passar a receber ${salReajustado.toLocaleString('pt-BR', {style:'currency',currency:'BRL'})}.</p>`
}