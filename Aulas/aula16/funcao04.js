function  factorial(n){
    let fat = 1
    for (let c = n; c>1; c--){
        fat*=c
    }
    return fat
}

 console.log (`O vatorial de ${factorial(5)}` )