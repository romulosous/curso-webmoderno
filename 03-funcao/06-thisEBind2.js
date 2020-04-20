function Pessoa(){
    this.idade = 0;

    setInterval(function(){ //dispara uma outra funcao apartir de um determinado intervalo passado
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000)
}


function Pessoa1(){
    this.idade = 0;

    const self = this;
    setInterval(function(){ //dispara uma outra funcao apartir de um determinado intervalo passado
        self.idade++;
        console.log(self.idade);
    }/*.bind(this*/, 1000)
}

const pessoa = new Pessoa1(10)