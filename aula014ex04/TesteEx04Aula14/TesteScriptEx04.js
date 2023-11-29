function contar() {
    var ini = window.document.getElementById('numIni')
    var fim = window.document.getElementById('numFim')
    var pass = window.document.getElementById('numPasso')
    var res = window.document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('[ERRO]')
        res.innerHTML = `Impossível contar!`
    
    } else {
        res.innerHTML = `Contando: `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)

        if(p = 0) {
            window.alert('[ERRO] Considere o passo numero 1')
            p = 1
        }

        if(i < f) {
            //Contagem crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            } 
            //Contagem decrescente
        } else{
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }            
        }
    } 

}