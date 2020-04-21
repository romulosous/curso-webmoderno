const valor = 'Global';

function minhaFuncao(){
    console.log(valor);
}

function exec(){
    const valor = 'Local';
    minhaFuncao(); // a funcao ela carrega consigo o local onde foi definida... entao ela vai procurar o contexto lexico que ela foi definida
}

exec();