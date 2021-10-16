import {Cliente} from "./Conta/Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js"



const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

//      console.log(contaPoupanca);

        // ContaPoupanca {
        //   _saldoInicial: 50,
        //   _cliente: Cliente { nome: 'Ricardo', _cpf: 11122233309 },
        //   _agencia: 1001
        // }

const conta = new Conta(50, cliente1, 1001)
//      console.log(conta)

        // Conta {
        //   _saldoInicial: 50,
        //   _cliente: Cliente { nome: 'Ricardo', _cpf: 11122233309 },
        //   _agencia: 1001
        // }

const contaSalario = new ContaSalario(cliente1)