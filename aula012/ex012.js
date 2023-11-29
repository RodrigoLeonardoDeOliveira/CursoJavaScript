var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatemente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}


/*
var hora = 13
console.log(`Agora são exatemente ${hora} horas.`)
if (hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
} */