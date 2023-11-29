let num = [5,8,2,9,3]
num.push(1) // acrescenta um novo valor no final
num.sort() //coloca em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}


/* 
let num = [5,8,2,9,3]
num[5] = 10 //Se eu colocar o conteúdo (neste caso um númeor) entre colchetes referente a um espaço já preenchido, o valor preenchido será substituido pelo atual.
num.push(11) //o push coloca no final o valor.

console.log(`Nosso vetor é o ${num} e o tamanho é ${num.length}`)

num.length//para saber o tamanho do array. obs -> lenght é um atributo. No JS não usa () 
*/
