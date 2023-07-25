import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
//  components

import Home from './pages/home/Home';
import List from './pages/list/List'
import Hotel from "./pages/hotel/Hotel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/hotels"  element={<List/>} />
        <Route path="/hotel/:id"  element={<Hotel/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
