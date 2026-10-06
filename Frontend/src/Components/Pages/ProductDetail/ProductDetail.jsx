import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductDetail.css";

import img1 from "../../../assets/product-1.png";
import img2 from "../../../assets/product-1-top.png";
import img3 from "../../../assets/product-1-rear.png";
import img4 from "../../../assets/product-1-bottom.png";

const product = {
  badge: "TOP PICK",
  name: "CloudStep Everyday Sneakers",
  rating: 4.9,
  reviews: 1248,
  sold: "2.1k sold",
  price: "₱1,899",
  old: "₱2,699",
  save: "Save 30%",
  images: [img1, img2, img3, img4],
  colors: [
    { name: "Lavender mix", hex: "#b9a6e8" },
    { name: "Coral", hex: "#e8756b" },
    { name: "Sand", hex: "#e6dfcb" },
  ],
  sizes: [36, 37, 38, 39, 40],
  shop: { initials: "SS", name: "Sole Studio", response: "96% response rate · replies within minutes", trust: 94 },
  features: [
    "Cloud-soft memory foam footbed",
    "Breathable recycled knit upper",
    "Flexible, non-slip rubber outsole",
    "True-to-size fit",
  ],
};

const tabs = ["Description", "Specifications", "Reviews (1,248)", "Shipping & returns"];

const ProductDetail = () => {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(38);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const [wished, setWished] = useState(false);

  return (
    <main className="pd">
      <nav className="pd-crumbs">
        <Link to="/">Home</Link> <span>›</span> <a href="#">Fashion</a> <span>›</span>{" "}
        <a href="#">Sneakers</a>
      </nav>

      <section className="pd-top">
        <div className="pd-gallery">
          <div className="pd-gallery__main">
            <img src={product.images[activeImg]} alt={product.name} />
            <button className="pd-zoom">⌕ Click to zoom</button>
          </div>
          <div className="pd-thumbs">
            {product.images.map((src, i) => (
              <button
                key={i}
                className={`pd-thumb ${i === activeImg ? "is-active" : ""}`}
                onClick={() => setActiveImg(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="pd-info">
          <div className="pd-info__row">
            <span className="pd-tag">{product.badge}</span>
            <span className="pd-stock">● In stock</span>
          </div>

          <h1 className="pd-title">{product.name}</h1>

          <p className="pd-rating">
            <span className="pd-star">★</span> {product.rating}
            <a href="#">{product.reviews.toLocaleString()} reviews</a>
            <span>{product.sold}</span>
          </p>

          <p className="pd-price">
            <strong>{product.price}</strong>
            <s>{product.old}</s>
            <em>{product.save}</em>
          </p>

          <div className="pd-voucher">
            <span className="pd-voucher__tag">EXTRA ₱150 OFF</span>
            <p>
              Use <b>MIRA150</b> at checkout
            </p>
            <button>Collect</button>
          </div>

          <div className="pd-option">
            <p>
              <b>Color</b> <span>{product.colors[color].name}</span>
            </p>
            <div className="pd-swatches">
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  className={`pd-swatch ${i === color ? "is-active" : ""}`}
                  style={{ background: c.hex }}
                  onClick={() => setColor(i)}
                />
              ))}
            </div>
          </div>

          <div className="pd-option">
            <p className="pd-option__head">
              <b>Size</b>
              <a href="#">Size guide</a>
            </p>
            <div className="pd-sizes">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={`pd-size ${s === size ? "is-active" : ""}`}
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="pd-actions">
            <div className="pd-qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button className="pd-btn pd-btn--ghost">🛒 Add to cart</button>
            <button className="pd-btn pd-btn--primary" onClick={() => navigate("/checkout")}>
              Buy now
            </button>
          </div>

          <button className="pd-wish" onClick={() => setWished(!wished)}>
            {wished ? "♥" : "♡"} Save to wishlist
          </button>

          <div className="pd-delivery">
            <span className="pd-delivery__icon">⛟</span>
            <div>
              <p>
                <b>Free delivery to Quezon City</b>
              </p>
              <small>Arrives Thu, 13 June – Sat, 15 June</small>
            </div>
            <a href="#">Change</a>
          </div>
        </div>
      </section>

      <section className="pd-shop">
        <div className="pd-shop__logo">{product.shop.initials}</div>
        <div className="pd-shop__info">
          <small className="pd-shop__verified">VERIFIED SHOP</small>
          <p>
            {product.shop.name} <span>✓</span>
          </p>
          <small>{product.shop.response}</small>
        </div>
        <div className="pd-shop__trust">
          <strong>{product.shop.trust}</strong>
          <small>Trust score</small>
        </div>
        <span className="pd-shop__divider" />
        <button className="pd-shop__chat">💬 Chat</button>
        <button className="pd-shop__visit">Visit shop</button>
      </section>

      <section className="pd-details">
        <div className="pd-tabs">
          {tabs.map((t, i) => (
            <button
              key={t}
              className={`pd-tabs__btn ${i === tab ? "is-active" : ""}`}
              onClick={() => setTab(i)}
            >
              {t}
            </button>
          ))}
        </div>

        {tab === 0 ? (
          <div className="pd-details__body">
            <div className="pd-desc">
              <small className="pd-eyebrow">WHY YOU'LL LOVE IT</small>
              <h2>Made for all-day movement.</h2>
              <p>
                Lightweight, breathable, and endlessly wearable. CloudStep pairs a cushioned sole
                with a soft recycled-knit upper for comfort that keeps up with you.
              </p>
              <ul>
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <aside className="pd-review">
              <strong className="pd-review__score">4.9</strong>
              <p className="pd-review__stars">★★★★★</p>
              <p className="pd-review__count">Loved by 1,248 buyers</p>
              <p className="pd-review__quote">
                “Feels like walking on clouds. The color is even prettier in person!”
              </p>
              <small>— Mara C. · Verified purchase</small>
            </aside>
          </div>
        ) : (
          <div className="pd-details__body">
            <p className="pd-empty">{tabs[tab]} content goes here.</p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductDetail;