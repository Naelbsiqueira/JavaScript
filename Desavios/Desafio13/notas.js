function analisar(){
    let nome = prompt("Qual o nome do aluno?")
    let not1 = parseFloat(prompt(`Primeira nota de ${nome}:`))
    let not2 = parseFloat(prompt(`Segundo nota de ${nome}:`))
    var media = Number((not1 + not2)/2)

    res.innerHTML = `<h2>Analisando a situação de ${nome}.</h2>`  

    if (media < 3){
        res.innerHTML += `<p>Com as notas ${not1} e ${not2} a  <strong>média é ${media}</strong>.</p>`
        res.innerHTML +=`<p>Com a média abaixo de 3,0 o aluno está <mark style="background-color:#ff0000">REPROVADO</mark>.</p>` 
    }else if(media >=3 && media <= 6 ){
        res.innerHTML+=`<p>Com as notas ${not1} e ${not2} a  <strong>média é ${media}</strong>.</p>`
        res.innerHTML+=`<p>Com a média entre 3,0 e 6,0 o aluno está de <mark>RECUPERAÇÃO</mark>.</p>`
    }else{
        res.innerHTML+=`<p>Com as notas ${not1} e ${not2} a <strong>média é ${media}</strong>.</p>`
        res.innerHTML+=`<p>Com a média acima de 6,0 o aluno está de <mark style="background-color: #00ff7f">APROVADO</mark>.</p>`
    } 


}