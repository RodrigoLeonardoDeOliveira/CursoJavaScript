let valores = [8,9,5,6,4,3]
//valores.sort() //Para ordenar os valores.

/*
for(let pos in valores) {
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}
*/

 
//OBS: Forma tradicional de escrever em JS abaixo. Acima a forma simplificada que é: for(    in       ) {   }

for(let pos = 0 ; pos < valores.length; pos++) {
    console.log(`A posição ${pos} recebe o valor ${valores[pos]}`)
}


/*Ao invés de escrever linha por linha de código eu faço o for como está acima.

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/