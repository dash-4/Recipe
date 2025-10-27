import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import ListPage from "./pages/ListPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/form" element={<FormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
