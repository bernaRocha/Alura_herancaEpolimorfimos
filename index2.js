//import { Cliente } from "./Cliente.js"
import { Gerente } from "./Gerente.js"
import { Diretor } from "./Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"
import { Cliente } from "./Cliente.js"

const cliente = new Cliente('Beltrana', 45645645667, '666')
const clienteLogado = SistemaAutenticacao.login(cliente, '666')
console.log(clienteLogado) // true

const diretor = new Diretor('Fulano', 10000, 12312312334)
diretor.cadastrarSenha('123345456')

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123345456')
console.log(diretorEstaLogado) // true

const gerente = new Gerente('Beltrano', 5000, 78078978912)
gerente.cadastrarSenha('123')

const gerenteEstaLogado = SistemaAutenticacao.login(diretor, '123')
console.log(gerenteEstaLogado)