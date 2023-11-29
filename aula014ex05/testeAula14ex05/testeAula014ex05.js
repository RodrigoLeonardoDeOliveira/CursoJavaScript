function calcular() {
    var tab = window.document.getElementById('ntab')
    var sel = window.document.getElementById('seltab')

    if(tab.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(tab.value)
        sel.innerHTML = ''
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            sel.appendChild(item)
            c++
        }
    }
}