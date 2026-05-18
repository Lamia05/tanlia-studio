import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Collection></Collection>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;