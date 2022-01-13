import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rodrigo", 10000, 96981212325);
diretor.cadastroSenha("123456789");
const gerente = new Gerente ("Geovane", 6000, 86709460651);
gerente.cadastroSenha("123456");
const cliente = new Cliente ("Arabella", 86709280654, "4321")

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "4321");

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
