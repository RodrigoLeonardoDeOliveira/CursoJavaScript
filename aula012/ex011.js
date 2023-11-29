var idade  = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
} // no brasil quem tem acima de 67 anos o voto é opcional, emtão deve se colocar o ou que é escrito por ||.

/*
var idade = 12
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigátorio')
} 
// o ultimo else ficou somente com chaves e o console porque seguindo a ordem e considerando que se menor de 16 não vota, menor entre 16 e 18 o voto é opcional, então o ultimo else pressupões que o voto para maior de 18 seja obrigatótio, sendo descrito no console.log.
   o else sozinho não leva o if na frente novamente por pressupor que a idade é maior que 18.
*/

/* 
var idade = 15
if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18) {
    console.log('Voto opcional')
} else if (idade >= 18) {
    console.log('Voto obrigatório')
}   // nova forma de escrever ainda mais abreviada que a anterior abaixo.
*/

/* 
var idade = 16
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade < 18){
        console.log('Voto opcional')
    }
} //Outra forma mais abreviada de escrever o código.
*/ 



/* 
var idade = 16
if (idade < 16) {
    console.log('Não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('Voto opcional')
    }
} */    // Neste exemplo, a variavel idade esta levando em consideração o if, sendo maior que 16 e menor que 18, na condional aninhada.
        // Nesta condição não foi levada em conta a pessoas maior que 18 anos, sendo refeita um novo código que esta descrito acima.




/* 
var idade = 22
if (idade < 18) {
console.log('Menor de idade')
} else {
    console.log('Maior de idade')
}
*/