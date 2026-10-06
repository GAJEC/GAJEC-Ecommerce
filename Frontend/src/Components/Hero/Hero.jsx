import React from "react";
import "./Hero.css";

import shoeImg from "../../assets/shoe.png";

const Hero = () => {
  return (
    <section className="hero-grid">
      <article className="hero-main">
        <div className="hero-main__text">
          <p className="eyebrow eyebrow--dark">MID-YEAR EDIT · UP TO 60% OFF</p>
          <h1 className="hero-main__title">
            Great finds,
            <span>made for you</span>
          </h1>
          <p className="hero-main__sub">
            Meet your new favorite things from trusted local shops, all in one
            joyful place.
          </p>
          <button className="btn-dark">
            Shop the edit <span>→</span>
          </button>
        </div>

        <div className="hero-main__visual">
          <img src={shoeImg} alt="Orange sneaker" />
        </div>

        <div className="hero-main__badge">
          <small>TODAY ONLY</small>
          <strong>Free shipping</strong>
        </div>
      </article>

      <article className="promo promo--flash">
        <div>
          <p className="eyebrow">12:08:42 LEFT</p>
          <h3>Flash finds</h3>
          <p className="promo__sub">Prices move fast</p>
        </div>
        <span className="promo__discount">-50%</span>
        <span className="promo__arrow">→</span>
      </article>

      <article className="promo promo--perks">
        <div>
          <p className="eyebrow eyebrow--light">MIRA PERKS</p>
          <h3>
            ₱200
            <br />
            welcome gift
          </h3>
          <p className="promo__sub">For your first checkout</p>
        </div>
        <span className="promo__letter">M</span>
        <span className="promo__arrow">→</span>
      </article>
    </section>
  );
};

export default Hero;