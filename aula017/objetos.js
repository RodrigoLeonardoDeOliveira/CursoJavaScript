let amigo = {nome:'josé',
sexo:'m',
peso:85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

/*
//obs: um objeto é um objeto e uma array é um objeto. Array != objeto => que um array coloca o identificador da variavel como numero e um objeto coloca o idenficador de forma literal como no exemplo.

let amigo = {}
console.log(typeof amigo)


let amigo = []
console.log(typeof amigo)
*/