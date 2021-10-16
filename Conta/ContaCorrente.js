import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{ //A ContaCorrente é uma extensão de Conta => esta é a herança, COntaCorrente herda de Conta
    static numeroDeContas = 0;
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar    
    sacar(valor){
        taxa = 1.1 * valor
        return this._sacar(valor, taxa);
    }

}
