import { Link } from "react-router-dom";
import "./style.css";

export default function Rules(){
    return(
        <div className="container">
            <div className="content-rules">
                <h1>O que são as regras do ESLint?</h1>
                <ul>
                    <li>Diretrizes</li>
                    <li>Arquivo de configuração</li>
                    <li>Projeto</li>
                </ul>

                <h2>Exemplos</h2>
                <ul>
                    <li>
                        <strong>no-redeclare: </strong>
                        elimina múltiplas declarações
                    </li>
                    <li>
                        <strong>no-unused-vars: </strong>
                        retira variáveis, funções e 
                        parâmetros não usados
                    </li>
                    <li>
                        <strong>no-magic-numbers: </strong>
                        torna o código mais legível, 
                        refatoração + fácil, números especiais como
                        constantes
                    </li>
                    <li><strong>eqeqeq: </strong>
                        elimina operadores de igualdade de 
                        tipo inseguro. Substitui '==' por '==='
                    </li>
                </ul>

                <h2>Exemplo (uso incorreto de no-magic-numbers)</h2>
                <div className="incorrect">
                    <img src="./img/incorrect.png"/>
                </div>
                <h2>Exemplo (uso correto)</h2>
                <div className="correct">
                    <img src="./img/correct.png"/>
                </div>

                <div className="navigation">
                    <Link to="/linters">
                        <span className="back">BACK</span>
                    </Link>
                    <Link to="/comand">
                        <span className="next">NEXT</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}