// this constante
let dobro = function(a){
    return 2 * a;
}

dobro = (a) => { // funcao arrow sempre é anonima
    return 2 * a;
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI));

let ola = function(){
    return 'olá';
}

ola = () => 'Olá';
ola = _ => 'Olá'; // possui um param
console.log(ola());
