import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WizardsList from "./components/WizardsList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WizardDetail from "./components/WizardDetail";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WizardsList />} />
          <Route path="/wizard/:id" element={<WizardDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
