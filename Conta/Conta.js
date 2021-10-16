// Classe abstrata só serve para ser herdada e nunca instanciada
// é a raiz das Contas

export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if(this.constructor == Conta){
      //console.error("Você não deveria instanciar um objeto do tipo Conta")
      	//console.error força o programa a parar em caso de rrro
      throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente")
    }

    this._saldo = saldoInicial;  // declaração as propriedades da classe dentro do método da classe
    this._cliente = cliente;
    this._agencia = agencia;

    //this._tipo = tipo // Não é boa ideia devido o tanto de if´s para as regras de negócio
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) {
      this._cliente = novoValor;
    }
  }

  get cliente() {
    return this._cliente;
  }

  get saldo() {
    return this._saldo;
  }

  //Método abstrato, deve ser sobrescrito pela classe filha
  sacar(valor) {
    // let taxa = 1
    // return this._sacar(valor, taxa);
    // Toda classe terá esse método mas não essas características devido cada conta ter sua característica própria.
  }

  _sacar(valor, taxa) { // underline porque é privado
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  tranferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

  }
}