let amigo = {nome:'José', idade:38,sexo:"M", peso: 75.2, 
engordar(p=0){
    console.log('Engordou')
    this.peso+=p
}}

amigo.engordar(7)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)