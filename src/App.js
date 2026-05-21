import React from "react";
import{Route,BrowserRouter,Routes}from "react-router-dom";
import Aaa from"./pages/aaa";
import Treinador from "./pages/Treinador";

function App(){
    return(
        <BrowserRouter>
        <Routes> 
        <Route path="/Pokebola/:id" element={<Aaa/>}/>
        <Route path="/" element={<Treinador/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;