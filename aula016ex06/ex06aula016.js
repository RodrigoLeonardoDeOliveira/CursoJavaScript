let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // vetor array

// Sequencia da primeira função, com paramentro nesta abaixo.
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Sequencia da primeira função, com paramentro nesta abaixo.
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Primeira função criada
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione um valor!')
    } else {
        var tot = valores.length
        var maior = valores [0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores) { //para cada posiçãoe em valores:
            soma += valores[pos]
            if(valores[pos] > maior) // se o valores na posição pos for maior que o maior valor o maior valor passa a ser o valores[pos.]
            maior = valores[pos]
            if(valores[pos] < menor) // se o valores na posição pos for menor que a variavel menor, a variavel menor recebe o valores[pos].
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}</p>` 
    }
}