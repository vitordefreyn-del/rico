import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Feed from "./feed";
function App(){
return(
<BrowserRouter>
<Routes>
<Route path="/feed/:id" element={<Feed />} />
</Routes>
</BrowserRouter>
)
}

export default App;