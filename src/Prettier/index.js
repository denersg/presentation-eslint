import { Link } from "react-router-dom";
import "./style.css";

export default function Prettier(){
    return(
        <div className="container">
            <div className="content-prettier">
                <h1>O que é Prettier e qual sua diferença para o ESLint?</h1>
                <div className="logo">
                    <img src="./img/prettier.png"/>
                </div>
                <ul>
                    <li>É um formatador de código</li>
                    <li>O ESLint acusa o erro</li>
                    <li>Força a formatação</li>
                </ul>
                <h2>Faz com que um código escrito assim:</h2>
                <div className="incorrect-prettier">
                    <img src="./img/escrito-errado.png"/>
                </div>
                <h2>Fique assim:</h2>
                <div className="correct-prettier">
                    <img src="./img/escrito-certo.png"/>
                </div>

                <div className="navigation">
                    <Link to="/comand">
                        <span className="back">BACK</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}