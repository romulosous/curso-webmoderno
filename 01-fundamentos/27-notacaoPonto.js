//notacao ponto => forma de quem de acessar os membros..
console.log(Math.ceil(6.1)); // teto => arrendoda pra cima

const obj1 = {};
obj1.nome = 'Bola';
// obj1['nome'] = 'Bola2'; notação colchetes
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome; // tornar publico
    this.exec = function(){
        console.log('Exec...');
    }
}



const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome)
console.log(obj3.nome);
obj3.exec();
console.log(obj3);
console.log(obj2);
console.log(obj1);
