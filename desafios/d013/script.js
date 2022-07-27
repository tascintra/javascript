function analisar() {
    let nAluno = window.prompt('Qual é o nome do aluno?')
    let nota1 = Number(window.prompt(`Primeira nota de ${nAluno}:`).toString().replace(",", "."))
    let nota2 = Number(window.prompt(`Segunda nota de ${nAluno}:`).toString().replace(",", "."))

    let media = (nota1 + nota2) / 2

    let rAnalise = window.document.getElementById('rSituacao')

    rAnalise.innerHTML = `<h2>Analisando a situação de ${nAluno}</h2>`

    if (media < 3) {
        rAnalise.innerHTML += `<p>Com as notas ${nota1.toLocaleString()} e ${nota2.toLocaleString()}, a <strong>média é ${media.toLocaleString()}</strong></p> <p>Com a média abaixo de 3,0, o aluno está <strong><mark id="reprovado">REPROVADO</mark></strong></p>`
    } else if (media <= 6) {
        rAnalise.innerHTML += `<p>Com as notas ${nota1.toLocaleString()} e ${nota2.toLocaleString()}, a <strong>média é ${media.toLocaleString()}</strong></p> <p>Com a média entre 3,0 e 6,0, o aluno está em <strong><mark id="recuperacao">RECUPERAÇÃO</mark></strong></p>`
    } else {
        rAnalise.innerHTML += `<p>Com as notas ${nota1.toLocaleString()} e ${nota2.toLocaleString()}, a <strong>média é ${media.toLocaleString()}</strong></p> <p>Com média acima de 6,0, o aluno está <strong><mark id="aprovado">APROVADO</mark></strong></p>`
    }
}