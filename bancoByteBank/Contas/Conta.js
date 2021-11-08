

export class Conta {

    constructor(saldoInicial, cliente, agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        if(this.constructor == Conta){
            console.log('Você não ter permissão para instanciar a classe conta');
        }
    }

    //método abstrato 
    sacar(valor){
        throw new Error("O método abstrato não foi sobreescrito"); 
    }

    //deveria ser protegido
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
        return 0;
    }

    //Getter e Setters

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
/*
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }*/

    depositar(valor){
        if(valor <=0){
            return;
        }
        this._saldo += valor;
    }

    transferencia(valor, conta){


        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


}