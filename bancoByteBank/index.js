//O JS orienta a colocar o caminho absoluto
/*
import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { Conta } from "./Contas/Conta.js";*/
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import { SistemaAutenticacao} from "./Funcionario/SistemaAutenticacao.js";

/*
const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

//contaCorrenteRicardo.transferencia(200, conta2);

console.log('------------------');
console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
console.log('------------------');
console.log('teste')
//console.log(contaCorrenteRicardo.teste());

console.log('------------------');
console.log('>>Sacar<<')
contaPoupanca.sacar(10);
console.log(contaPoupanca);
console.log(contaCorrenteRicardo);
console.log('------------------');
const dados = new Conta();
console.log('------------------');
*/


const diretor = new Diretor("Rodrigo", 10000, 44433388811);
diretor.cadastrarSenha("123456");

const gerente = new Gerente("Ricargo", 5000, 12345678910);
diretor.cadastrarSenha("123456");

const estadoLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(estadoLogado);