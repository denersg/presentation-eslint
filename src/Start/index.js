import { Link } from "react-router-dom";
import "./style.css";

export default function Start(){
    return(
        <main>
            <div className="container">
                <div className="content">
                    <h1 className="presentation-title">Linters e Formaters</h1>
                    <Link to="/linters">
                        <span className="game-start cursor">Game Start</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}