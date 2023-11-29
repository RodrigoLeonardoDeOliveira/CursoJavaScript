    var n = window.document.getElementById('num')
    var lista = window.document.getElementById('selnum')
    var res = window.document.getElementById('res')
    var valores = []   
    
    function Enumero (e) {
        if(Number(e) > 1 && Number(e) <= 100) {
            return true
        } else {
            return false
        }
    }


    function inLista(n, l) {
        if(l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }

    function adicionar() {
          if(Enumero(n.value) && !inLista(n.value, valores)) { // o ! é um parametro.
            valores.push(Number(n.value))
            let item = document.createElement('option')
            item.text = `O valor ${n.value} foi adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
            
        } else {
            window.alert('Valor inválido ou já encontrado na lista!')
        }
        n.value = ''
        n.focus()
    }

    function finalizar () {
        if(valores.length == 0) {
            window.alert('Por favor digite um número!')
        } else {
            var total = valores.length
            var maior = valores[0]
            var menor = valores[0]
            var soma = 0
            var media = 0

            for(let pos in valores) {
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor =  valores[pos]
            soma += valores[pos]
        }
            media = soma / total

            res.innerHTML = ''
            res.innerHTML += `<p>Foram selecionados ${total} de números.</p>`
            res.innerHTML += `<p>O número ${maior} foi o maior valor informado.</p>`
            res.innerHTML += `<p>O número ${menor} foi o menor número informado.</p>`
            res.innerHTML += `<p>A soma dos valores informados é: ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores informados foi: ${media}.`
            
        }
        
    }
