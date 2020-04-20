const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()
const falar = pessoa.falar
falar(); // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();





global.x = 9; //this aqui se refere ao objeto global "window" do navegador
var module = {
  x: 81,
  getX: function() { console.log(this.x); }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); // retorna 9 - a função foi invocada no escopo global

// Criando uma nova função com 'this' vinculada ao módulo
// Programadores novatos podem confundir a variável x
// global com a propriedade x do módulo
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
