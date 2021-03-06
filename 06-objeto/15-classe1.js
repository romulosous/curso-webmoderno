class Lancamento{
    constructor(nome = 'Generico', valor = 0 ){
        this.nome = nome;
        this.valor = valor;

    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.Lancamento = [];
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l));
    }
    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor;
        })

        return valorConsolidado;
    }
}

const salario = new Lancamento('Salario', 1200);
const contaDeLuz = new Lancamento('Luz', -99);

const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, contaDeLuz);
console.log(contas.sumario);