function verificacaoDeString(string1, string2){
    let estaContido = true;
    for(let i = 0; i < string1.length; i++){
        let caracteresString1 = string1.charAt(i).toLowerCase();
        for (let j = 0; j < string2.length; j++){
            let caracteresString2 = string2.charAt(j).toLowerCase();
            if(caracteresString1 == caracteresString2){
                estaContido = true;
                break
            } else{
                estaContido = false;
            }
        }
        if(!estaContido){
            return estaContido;
        }
    }
    return estaContido;
}

console.log(verificacaoDeString('abc','cba'));
console.log(verificacaoDeString('abc','qua'));
console.log(verificacaoDeString('amor','roma'));