function antsuc() {
    let num = Number(window.prompt('Digite um número inteiro qualquer'))
    let ant = num - 1
    let suc = num + 1
    window.alert(`Antes de ${num}, temos o número ${ant}.\nDepois de ${num}, temos o número ${suc}.`)
}