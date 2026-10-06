import React from "react";
import { useNavigate } from "react-router-dom";

import Hero from "../Components/Hero/Hero";

import book from "../assets/book.png";
import groceries from "../assets/grocery.png";
import gaming from "../assets/gaming.png";
import fashion from "../assets/fashion.png";
import home from "../assets/home.png";
import sports from "../assets/sports.png";
import tech from "../assets/tech.png";
import beauty from "../assets/beauty.png";

const categories = [
  { name: "Tech", icon: tech, tone: "violet" },
  { name: "Fashion", icon: fashion, tone: "red" },
  { name: "Beauty", icon: beauty, tone: "orange" },
  { name: "Home", icon: home, tone: "blue" },
  { name: "Groceries", icon: groceries, tone: "green" },
  { name: "Sports", icon: sports, tone: "amber" },
  { name: "Gaming", icon: gaming, tone: "pink" },
  { name: "Books", icon: book, tone: "sky" },
];

const products = [
  { id: 1, shop: "SOLE STUDIO", name: "CloudStep Everyday Sneakers", price: "₱1,899", old: "₱2,699", rating: "4.9", sold: "2.1k sold", badge: "30% OFF", liked: false, image: null, bg: "#f3d9e6" },
  { id: 2, shop: "MOTION MNL", name: "Aero Max Street Runners", price: "₱2,490", old: "₱3,290", rating: "4.8", sold: "890 sold", badge: "TRENDING", liked: false, image: null, bg: "#cfcdcb" },
  { id: 3, shop: "KIND SKIN", name: "Radiance Barrier Serum", price: "₱649", old: "₱899", rating: "4.9", sold: "4.6k sold", badge: "28% OFF", liked: true, image: null, bg: "#3a3b40" },
  { id: 4, shop: "COMMON GROUND", name: "Retro Canvas Low", price: "₱1,299", old: "₱1,799", rating: "4.7", sold: "1.4k sold", badge: "FLASH", liked: false, image: null, bg: "#f2a516" },
  { id: 5, shop: "KIND SKIN", name: "Daily Dew Face Oil", price: "₱520", old: "₱750", rating: "4.8", sold: "712 sold", badge: "NEW", liked: false, image: null, bg: "#c98a55" },
  { id: 6, shop: "SOLE STUDIO", name: "Court Classic Sneakers", price: "₱2,199", old: "₱2,999", rating: "4.9", sold: "3.2k sold", badge: "BESTSELLER", liked: true, image: null, bg: "#dcdce0" },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="hero-page">
      <Hero />

      <section className="explore">
        <div className="section-head">
          <div>
            <p className="eyebrow eyebrow--accent">EXPLORE</p>
            <h2>Everything you’re into</h2>
          </div>
          <a href="#" className="view-all">
            View all <span>→</span>
          </a>
        </div>

        <div className="category-grid">
          {categories.map((c) => (
            <button key={c.name} className="category">
              <span className={`category__icon tone-${c.tone}`}>
                <img src={c.icon} alt="" />
              </span>
              <span className="category__name">{c.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="smart">
        <div className="smart__left">
          <span className="smart__icon">✦</span>
          <div>
            <p className="eyebrow eyebrow--light">SMART MATCH</p>
            <h2>Tell Mira what you need.</h2>
            <p className="smart__hint">
              Try “comfortable sneakers under ₱2,000 for daily walks.”
            </p>
          </div>
        </div>

        <div className="smart__input">
          <input type="text" placeholder="Tell Mira what you need..." />
          <button>→</button>
        </div>
      </section>

      <section className="picks">
        <div className="section-head">
          <div>
            <p className="eyebrow eyebrow--accent">PICKED FOR YOU</p>
            <h2>Good things, thoughtfully chosen</h2>
          </div>
          <div className="tabs">
            <button className="tabs__btn tabs__btn--active">For you</button>
            <button className="tabs__btn">Trending</button>
            <button className="tabs__btn">New in</button>
          </div>
        </div>

        <div className="product-grid">
          {products.map((p) => (
            <article key={p.id} className="product">
              <button
                className="product__card"
                onClick={() => navigate(`/product/${p.id}`)}
              >
                <div className="product__img" style={{ background: p.bg }}>
                  {p.image && <img src={p.image} alt={p.name} />}
                  <span className="product__badge">{p.badge}</span>
                </div>

                <div className="product__body">
                  <p className="product__shop">
                    {p.shop} <span className="product__verified">✓</span>
                  </p>
                  <h3 className="product__name">{p.name}</h3>
                  <p className="product__price">
                    {p.price} <s>{p.old}</s>
                  </p>
                  <p className="product__meta">
                    <span className="product__star">★</span> {p.rating}
                    <span>{p.sold}</span>
                  </p>
                  <p className="product__delivery">⛟ Free delivery</p>
                </div>
              </button>

              <button
                className={`product__heart ${p.liked ? "is-liked" : ""}`}
                aria-label="Add to wishlist"
              >
                {p.liked ? "♥" : "♡"}
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;