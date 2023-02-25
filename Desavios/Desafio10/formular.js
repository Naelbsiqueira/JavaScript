function calcular(){
    var a = Number(prompt('Qual o valor de a ?'))
    var b = Number(prompt('Qual o valor de b ?'))
    var c = Number(prompt('Qual o valor de c ?'))
    var delta = b**2 - 4 * a *c
    res.innerHTML=`<h2>Resolvendo Bhaskara</h2>
                    <p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong>.</p>
                    <p>O cálculo realizado será <strong>Δ = ${b}² - 4. ${a}. ${c}</strong>.</p>
                    <p>O valor calculado de <strong>Δ = ${delta}</strong>.</p>`                  
    


}