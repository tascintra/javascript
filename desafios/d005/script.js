function converter() {
    let iMetros = window.prompt('Digite uma distância em metros (m)')
    metros = Number(iMetros.toString().replace(",", "."))
    let km  = metros / 1000
    let hm  = metros / 100
    let dam = metros / 10
    let dm  = metros * 10
    let cm  = metros * 100
    let mm  = metros * 1000

    let convertido = window.document.getElementById('convertido')

    convertido.innerHTML = `<h2>A distância de ${metros.toLocaleString()} metros, corresponde a...</h2>`
    convertido.innerHTML += `<p>${km.toLocaleString()} quilômetros (Km)</p> <p>${hm.toLocaleString()} hectômetros (Hm)</p> <p>${dam.toLocaleString()} decâmetros (Dam)</p> <p>${dm.toLocaleString()} decímetros (dm)</p> <p>${cm.toLocaleString()} centímetros (cm)</p> <p>${mm.toLocaleString()} milímetros (mm)</p>`
}