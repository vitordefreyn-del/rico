import React from "react";
import{Route,BrowserRouter,Routes}from "react-router-dom";
import Aaa from"./aaa";
import Iee from"./Iee";
import Treinador from "./Treinador";

function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/Pokebola1" element={<Iee/>}/>
        <Route path="/Pokebola" element={<Aaa/>}/>
        <Route path="/" element={<Treinador/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;