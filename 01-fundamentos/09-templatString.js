const nome = "Rebeca";
const concatenacao = 'Olá ' + nome + '!';
const template = `
    Olá
    ${nome}!`;

console.log(concatenacao, template);

// expressoes...
console.log(`1 + 1 = ${1 + 1}`);

for(let i = 0; i<=10; i++){
    console.log(`1 + ${i} = ${1 + i}`);
}

const up = texto => texto.toUpperCase();
console.log(`Ei...${up('cuidado')}!`);




