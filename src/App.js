import React from "react";
import './App.css';
import Header from "./pages/Header/Header"
import FoodIce from "./pages/FoodIce/FoodIce";
import MainNewPage from "./pages/Main/MainNew/MainNewPage";
import MainMenu from "./pages/Main/MainMenu/MainMenu";
import MainNewBurger from "./pages/Main/MainNewBurger/MainNewBurger";
import MainNewPizza from "./pages/Main/MainNewPizza/MainNewPizza";
import MainAbout from "./pages/Main/MainAbout/MainAbout";
import MainReview from "./pages/Main/MainReview/MainReview";
import Footer from "./Footer/Footer";

function App() {
  return (
      <section className="container">
        <div className="content">
          <Header/>
          <FoodIce/>
          <MainNewPage/>
          <MainNewBurger/>
          <MainMenu/>
          <MainNewPizza/>
          <MainAbout/>
          <MainReview/>
          <Footer/>
        </div>
      </section>

  );
}

export default App;


