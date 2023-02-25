function parimp(n){
    if (n%2==0){
        return 'Par'
    }else{
        return 'Impar.'
    }
}
let num = parimp(22)
console.log(`O número digitado é ${num}`)