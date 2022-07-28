import React from "react";
import './App.css';
import Header from "./pages/Header/Header"
import FoodIce from "./pages/FoodIce/FoodIce";

function App() {
  return (
      <section className="container">
        <div className="content">
          <Header/>
          <FoodIce/>
        </div>
      </section>

  );
}

export default App;


