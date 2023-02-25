let num = [5,8,9,6]
num[4] = 4 // Adicionar valor em ponto específico na variável composta.
num.push(2) // Adiciona elemento na ultima posição da variável composta
num.length // Conta o número de elemento dentro de uma array ou variável composta.
num.sort  // Organza em ordem crescente o elemento do array/vetor/variável composta.
console.log(`O nosso vetor é o ${num.sort()}`)
let pos = num.indexOf(2) /* Buscar elementos específicos é mostra sua posição dentro do vetor. 
Quando aparecer o valor -1 significa que não foi encontrado dentro da array*/ 
console.log(`O valor 2 está na posição ${pos}.`)
