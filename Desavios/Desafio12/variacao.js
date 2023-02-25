function verificar(){

    var preAnt = Number(prompt("Qual o preço anterior do produto ?"));
    var preAtu = Number(prompt("Qual o preço atual do produto ?"));
    var price= Number( Math.abs(preAnt-preAtu).toLocaleString());
    let perc = 0;

    res.innerHTML =`<h2>Analisando o valores informados</h2>
                    O produto custava R$ ${preAnt.toFixed(2).replace('.',',')} e agora custa R$ ${preAtu.toFixed(2).replace('.',',')}`;
    
    if (preAnt < preAtu) {

        perc =  ((( preAtu/preAnt) - 1) * 100).toFixed(2);
        res.innerHTML += `<p> Hoje o produto está mais caro. </p>`;
        res.innerHTML += `<p> O preço subiu R$ ${price.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p> Uma variação de ${perc}% pra cima.</p>`;

    } else {

        perc = (((preAnt / preAtu) - 1) * 100).toFixed(2);

        res.innerHTML += `<p> Hoje o produto está mais barato. </p>`;
        res.innerHTML += `<p> O preço caiu R$ ${price.toFixed(2).replace('.',',')} em relação ao preço anterior.</p>`;
        res.innerHTML += `<p> Uma variação de ${perc}% pra baixo.</p>`;
    }
 



}
