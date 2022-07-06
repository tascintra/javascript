function tabuada() {
    let num = document.getElementById('txtn')

    let rHist = document.getElementsByName('radhist')


    let div = document.getElementById('res')
    let tab = document.createElement('select')
    


    if (num.value.length == 0) {
        alert('Por favor, digite um número.')
    } else if (rHist[0].checked) {
        div.innerHTML = ''
        let n = Number(num.value)
        let c = 1

        tab.setAttribute('size', '10')
        tab.style.overflow = ('hidden')
        tab.style.font = ('normal 18px Arial')
        tab.style.margin = ('2px')
        div.appendChild(tab)

        while (c <= 10) {
            let item  = document.createElement('option')  // cria elemento dentro do select do HTML
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    } else {
        let n = Number(num.value)
        let c = 1

        div.appendChild(tab)
        tab.setAttribute('size', '10')
        tab.style.overflow = ('hidden')
        tab.style.font = ('normal 18px Arial')
        tab.style.margin = ('2px')



        while (c <= 10) {
            let item  = document.createElement('option')  // cria elemento dentro do select do HTML
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // saber qual item foi selecionado (não faz muito sentido para js somente para outras linguagens)
            tab.appendChild(item)
            c++
        }
    }
}