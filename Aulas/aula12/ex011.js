var idade = 2
console.log(`Você tem ${idade} anos.`)
if (idade <16 ){
    console.log('Não vota')
}else if (idade < 18 || idade >= 65){
    console.log('O voto é opicional')
}else{
    console.log('o voto é obrigatótio')
}