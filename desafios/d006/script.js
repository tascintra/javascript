function converter() {
    let iTemp = window.prompt('Digite uma distância em metros (m)')
    let celsius = Number(iTemp.toString().replace(",", "."))
    let kelvin  = celsius + 273.15
    let fahren  = (celsius * 1.8) + 32

    let convertido = window.document.getElementById('convertido')

    convertido.innerHTML = `<h2>A temperatura ${celsius.toLocaleString()}°C, corresponde a...</h2>`
    convertido.innerHTML += `<p>${kelvin.toLocaleString()}°K (Kelvin)</p> <p>${fahren.toLocaleString()}°F (Fahrenheit)</p>`
}