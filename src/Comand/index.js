import { Link } from "react-router-dom";
import "./style.css";

export default function Comand(){
    return(
        <div className="container">
            <div className="content-comand">
                <h1>O que é o comando <b>eslint --fix</b>?</h1>
                <ul>
                    <li>Comando de autofix</li>
                    <li>Corrige erros</li>
                    <li>Automaticamente</li>
                </ul>

                <h2>Variações:</h2>
                <ul>
                    <li>
                        <strong>yarn eslint --fix --ext .js src/: </strong>
                        correção em arquivos .js
                    </li>
                    <li>
                        <strong>eslint [arquivo] --fix: </strong>
                        executa correção no arquivo especificado
                    </li>
                </ul>

                <div className="navigation">
                    <Link to="/rules">
                        <span className="back">BACK</span>
                    </Link>
                    <Link to="/prettier">
                        <span className="next">NEXT</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}