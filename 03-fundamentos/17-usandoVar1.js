// var =>  escopo global e escopo de funcao 
{ 
    { 
        { 
            { 
                var sera = 'Será???';
                console.log(sera);
            }
        } 
    } 
}
console.log(sera);

function teste(){
    var local = 123;
    console.log(local);
}

teste();
//console.log(local); Erro;


//escopo = local onde aqueles valores sao acessivel