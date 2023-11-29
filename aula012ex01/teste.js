function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('num01')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('rsex')
        var idade =  ano - Number(fano.value)
        var genero = ''


        if (fsex[0].checked) {
            genero = 'um Homem'
                if(idade >= 0 && idade < 10) {
                    //criança homem
                } else if (idade < 21) {
                    // Jovem homem
                } else if (idade < 50) {
                    //Adulto homem
                } else {
                    //Idoso homem
                } 
        } else if (fsex[1].checked) {
            genero = 'uma Mulher'    

            if (idade >= 0 && idade < 10) {
                    //Criança mulher
            } else if (idade < 21) {
                    //Jovem mulher
            } else if (idade < 50) {
                    //Adulto Mulher
            } else {
                //Idoso mulher
            }
        }

        res.innerHTML = `Detectamos ${genero} com idade de ${idade}!`
    }
}