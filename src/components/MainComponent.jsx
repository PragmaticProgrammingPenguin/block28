import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Blue from "./Blue";
import Red from "./Red";
import SkyBlue from "./SkyBlue";
import Magenta from "./Magenta";

export default function Main(){
    return(
        <div id="main-section">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blue" element={<Blue />} />
                <Route path="/red" element={<Red />} />
                <Route path="/magenta" element={<Magenta />} />
                <Route path="/skyblue" element={<SkyBlue />} />
            </Routes>
        </div>
    )
}