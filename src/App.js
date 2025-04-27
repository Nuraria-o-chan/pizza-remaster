import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import "./scss/app.scss";
// import pizzas from "./assets/pizzas.json";
import React from "react";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
          {/* <Home /> */}
          {/* <NotFound /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
