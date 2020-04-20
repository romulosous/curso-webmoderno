const a = 1;
const b = 2;
const c = 3;

const obj1 = { a: a, b: b, c: c }; //antes do ES 2015 tinha essa duplicidade
const obj2 = {a, b, c };
console.log(ob1, obj2);

const nomeAttr = 'nota';
const valorAttr = 7.87;

const obj3 = {};
obj3[nomeAttr] = valorAttr;
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}; // forma nova
console.log(obj4);

const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){ //forma nova
        //...
    }
}
