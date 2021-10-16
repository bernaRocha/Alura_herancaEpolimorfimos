import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
  constructor(saldoInicial, cliente, agencia){
    super(saldoInicial, cliente, agencia)   //recebe o construtor da classe Conta
  }

  sacar(valor){
    const taxa = 1.02;
    return this._sacar(valor, taxa)
  }
}
