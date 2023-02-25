function verificar(){
    var ano = parseInt(prompt('Qual ano você quer verificar?'))
    var res = ''   
    if (ano % 4 == 0 && ano%100!=0 || (ano % 4 == 0 && ano % 400 == 0 && ano % 100==0)){        
        res = "é um ano Bissexto " 
    }else{
        res= "não é um ano Bissexto"
    }
    resul.innerHTML = `<h2>Analizando o ano ${ano}.</h2>
                    <p> O ano de ${ano} ${res}</p>`

}