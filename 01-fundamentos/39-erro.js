function tratarErroELancar(erro){
    // throw new Error('...');
    // throw true;
    // throw 'mensagem';
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErroELancar(e);
    } finally{
        console.log('final'); // executa mesmo assim...si de erro ou nao

    }
}

const obj = { name: 'Roberto' }
imprimirNomeGritado(obj);