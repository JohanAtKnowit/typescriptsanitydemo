import React from "react";
import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PetArticle from "./components/petArticle";
import PetsCollection from "./components/petsCollection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PetsCollection />} path="/" />
        <Route element={<PetArticle />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
