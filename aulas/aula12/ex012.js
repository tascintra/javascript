var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora > 18) {
    console.log('Boa Noite!')
} else if (hora < 18 && hora > 12) {
    console.log('Boa Tarde!')
} else if (hora > 6 && hora < 12) {
    console.log('Bom Dia!')
} else {
    console.log('Boa Madrugada!')
}