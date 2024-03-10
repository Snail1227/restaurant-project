import React from "react";
import food1 from "../images/food1.jpeg";
import food2 from "../images/food2.jpeg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpeg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpeg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";
import food9 from "../images/food9.jpg";
import food10 from "../images/food10.jpeg";
import food11 from "../images/food11.jpeg";
import food12 from "../images/food12.jpg";
import food13 from "../images/food13.jpg";
import food14 from "../images/food14.webp";
import food15 from "../images/food15.jpeg";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="home-page container-transition">
      <div className="home-page-content">
        <div className="home-images-grid-col">
          <img src={food1} alt="food-1" />
          <img src={food2} alt="food-2" />
          <img src={food3} alt="food-3" />
          <img src={food4} alt="food-4" />
          <img src={food5} alt="food-5" />
          <img src={food6} alt="food-6" />
          <img src={food7} alt="food-7" />
        </div>
        <div className="home-images-grid-col">
          <img src={food9} alt="food-9" />
          <img src={food8} alt="food-8" />
          <img src={food10} alt="food-10" />
          <img src={food11} alt="food-11" />
          <img src={food12} alt="food-12" />
          <img src={food14} alt="food-14" />
        </div>
      </div>

      <section className="home-text-content">
        <h2>
          A cozy, nostalgic New York café and wine bar in the heart of the West
          Village
        </h2>
      </section>

      <section className="home-info-container">
        <div className="home-info">
            <div className="home-info-text">
                <h2>Reservations</h2>
                <p>Vista Mare is very much a neighborhood restaurant, and we always reserve seats for walk-in guests in our dining room. Reservations are available via Resy.</p>
                <Link to='/reserve' className="home-btn btn-brant">Reserve a Table</Link>
            </div>
            <img className="reserve-home" src={food13} alt="" />
        </div>
        <div className="home-info-reverse">
            <img className="reserve-home" src={food15} alt="" />
            <div className="home-info-text"> 
                <h2>Hours and location</h2>
                <p>Vista Mare is very much a neighborhood restaurant, and we always reserve seats for walk-in guests in our dining room. Reservations are available via Resy.</p>
                <Link to="/location" className="home-btn btn-brant">More Info</Link>
            </div>
        </div>
      </section>
    </div>
  );
};
