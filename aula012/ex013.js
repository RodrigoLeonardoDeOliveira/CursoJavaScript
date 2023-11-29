var agora = new Date()
var diaSem =  agora.getDay()


//Se eu criar uma var diaSem com o numero referente ao dia da semana, a variavel anterior vai perder o valor e será escrito o dia da semana conforme for selecionado: ex: var diaSem = 0 .. vai aparecer domingo. Se eu colocar varSem = 7 vai aparecer [Erro] Dia invalido, conforme informado no default.
//var diaSem = 7

/*
Domingo
Segunda
Terça
Quarta
Quinta
Sexta
Sabado
Domingo
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break    
    case 2: 
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break    
    case 4:
        console.log('Quinta')    
        break
    case 5: 
        console.log('Sexta')    
        break
    case 6: 
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inválido')
        break
}


// o ultimo break é opcional, popis não tem comando em baixo.