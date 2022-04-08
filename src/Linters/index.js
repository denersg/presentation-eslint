import { Link } from "react-router-dom";
import "./style.css";

export default function Linters(){
    return(
        <div className="container">
            <div className="content-linters">
                <h1>O que é um linter?</h1>
                <ul>
                    <li>Ferramenta de checagem</li>
                    <li>Sinaliza erros de programação</li>
                    <li>Aponta erros estilísticos</li>
                </ul>

                <h2>Erros de programação:</h2>
                <div className="prog-errors">
                    <img src="./img/ponto-virgula.png"/>
                    <img src="./img/var.png"/>
                    <img src="./img/imports.png"/>
                    <img src="./img/loop.png"/>
                </div>
                
                <h2>Erros de estilo:</h2>
                <div className="style-errors">
                    <img src="./img/error-space.png"/>
                    <img src="./img/indentation.png"/>
                    <img src="./img/aspas.png"/>
                </div>
                <h2>Exemplos de programas:</h2>
                <h1>Por que usar?</h1>
                <ul>
                    <li>Unificação do código</li>
                    <li>Mercado</li>
                    <li>Trabalho em equipe</li>
                    <li>Evitar bugs</li>
                    <li>Aprender com os erros</li>
                </ul>

                <div className="navigation">
                    <Link to="/">
                        <span className="back">BACK</span>
                    </Link>
                    <Link to="/rules">
                        <span className="next">NEXT</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}