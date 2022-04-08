import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Linters from "./Linters";
import Rules from "./Rules";
import Comand from "./Comand";
import Prettier from "./Prettier";

export default function App(){
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />}></Route>
                    <Route path="/linters" element={<Linters />}></Route>
                    <Route path="/rules" element={<Rules />}></Route>
                    <Route path="/comand" element={<Comand />}></Route>
                    <Route path="/prettier" element={<Prettier />}></Route>
                </Routes>
            </BrowserRouter>
    );
}