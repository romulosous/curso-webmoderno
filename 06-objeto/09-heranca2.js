// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0'; // não faça isso

const avo = { attr1: 'A'};
const pai = { __proto__: avo, attr2: 'B', attr3: '3'};
const filho = { __proto__: pai, attr3: 'C'};
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        } else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velAtual}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //super -> referenciar o metodo que esta dentro do prototipo no obj super
    }
}

Object.setPrototypeOf(ferrari, carro); //definir a relacao de prototipo
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());