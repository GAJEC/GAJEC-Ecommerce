import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ProductDetailStle from "../assets/styles/ProductDetail.module.css";

import img1 from "../assets/images/product-1.png";
import img2 from "../assets/images/product-1-top.png";
import img3 from "../assets/images/product-1-rear.png";
import img4 from "../assets/images/product-1-bottom.png";
import shoppingCart from "../assets/images/shopping-cart.png";
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
  shop: {
    initials: "SS",
    name: "Sole Studio",
    response: "96% response rate · replies within minutes",
    trust: 94,
  },
  features: [
    "Cloud-soft memory foam footbed",
    "Breathable recycled knit upper",
    "Flexible, non-slip rubber outsole",
    "True-to-size fit",
  ],
};

const tabs = [
  "Description",
  "Specifications",
  "Reviews (1,248)",
  "Shipping & returns",
];

const ProductDetail = () => {
  const navigate = useNavigate();
  const [activeImg, setActiveImg] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(38);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState(0);
  const [wished, setWished] = useState(false);

  return (
    <main className={ProductDetailStle["pd"]}>
      <nav className={ProductDetailStle["pd-crumbs"]}>
        <Link to="/">Home</Link> <span>›</span> <a href="#">Fashion</a>{" "}
        <span>›</span> <a href="#">Sneakers</a>
      </nav>

      <section className={ProductDetailStle["pd-top"]}>
        <div className={ProductDetailStle["pd-gallery"]}>
          <div className={ProductDetailStle["pd-gallery__main"]}>
            <img src={product.images[activeImg]} alt={product.name} />
            <button className={ProductDetailStle["pd-zoom"]}>
              ⌕ Click to zoom
            </button>
          </div>
          <div className={ProductDetailStle["pd-thumbs"]}>
            {product.images.map((src, i) => (
              <button
                key={i}
                className={
                  ProductDetailStle["pd-thumb"] +
                  ` ${i === activeImg ? "is-active" : ""}`
                }
                onClick={() => setActiveImg(i)}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className={ProductDetailStle["pd-info"]}>
          <div className={ProductDetailStle["pd-info__row"]}>
            <span className={ProductDetailStle["pd-tag"]}>{product.badge}</span>
            <span className={ProductDetailStle["pd-stock"]}>● In stock</span>
          </div>

          <h1 className={ProductDetailStle["pd-title"]}>{product.name}</h1>

          <p className={ProductDetailStle["pd-rating"]}>
            <span className={ProductDetailStle["pd-star"]}>★</span>{" "}
            {product.rating}
            <a href="#">{product.reviews.toLocaleString()} reviews</a>
            <span>{product.sold}</span>
          </p>

          <p className={ProductDetailStle["pd-price"]}>
            <strong>{product.price}</strong>
            <s>{product.old}</s>
            <em>{product.save}</em>
          </p>

          <div className={ProductDetailStle["pd-voucher"]}>
            <span className={ProductDetailStle["pd-voucher__tag"]}>
              EXTRA ₱150 OFF
            </span>
            <p>
              Use <b>MIRA150</b> at checkout
            </p>
            <button>Collect</button>
          </div>

          <div className={ProductDetailStle["pd-option"]}>
            <p>
              <b>Color</b> <span>{product.colors[color].name}</span>
            </p>
            <div className={ProductDetailStle["pd-swatches"]}>
              {product.colors.map((c, i) => (
                <button
                  key={c.name}
                  aria-label={c.name}
                  className={
                    ProductDetailStle["pd-swatch"] +
                    ` ${i === color ? "is-active" : ""}`
                  }
                  style={{ background: c.hex }}
                  onClick={() => setColor(i)}
                />
              ))}
            </div>
          </div>

          <div className={ProductDetailStle["pd-option"]}>
            <p className={ProductDetailStle["pd-option__head"]}>
              <b>Size</b>
              <a href="#">Size guide</a>
            </p>
            <div className={ProductDetailStle["pd-sizes"]}>
              {product.sizes.map((s) => (
                <button
                  key={s}
                  className={
                    ProductDetailStle["pd-size"] +
                    ` ${s === size ? "is-active" : ""}`
                  }
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className={ProductDetailStle["pd-actions"]}>
            <div className={ProductDetailStle["pd-qty"]}>
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <button
              className={
                ProductDetailStle["pd-btn"] +
                " " +
                ProductDetailStle["pd-btn--ghost"]
              }
            >
              <img
                src={shoppingCart}
                alt=""
                className={ProductDetailStle["pd-btn__icon"]}
              />
              Add to cart
            </button>
            <button
              className={
                ProductDetailStle["pd-btn"] +
                " " +
                ProductDetailStle["pd-btn--primary"]
              }
              onClick={() => navigate("/checkout")}
            >
              Buy now
            </button>
          </div>

          <button
            className={ProductDetailStle["pd-wish"]}
            onClick={() => setWished(!wished)}
          >
            {wished ? "♥" : "♡"} Save to wishlist
          </button>

          <div className={ProductDetailStle["pd-delivery"]}>
            <span className={ProductDetailStle["pd-delivery__icon"]}>⛟</span>
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

      <section className={ProductDetailStle["pd-shop"]}>
        <div className={ProductDetailStle["pd-shop__logo"]}>
          {product.shop.initials}
        </div>
        <div className={ProductDetailStle["pd-shop__info"]}>
          <small className={ProductDetailStle["pd-shop__verified"]}>
            VERIFIED SHOP
          </small>
          <p>
            {product.shop.name} <span>✓</span>
          </p>
          <small>{product.shop.response}</small>
        </div>
        <div className={ProductDetailStle["pd-shop__trust"]}>
          <strong>{product.shop.trust}</strong>
          <small>Trust score</small>
        </div>
        <span className={ProductDetailStle["pd-shop__divider"]} />
        <button className={ProductDetailStle["pd-shop__chat"]}>💬 Chat</button>
        <button className={ProductDetailStle["pd-shop__visit"]}>
          Visit shop
        </button>
      </section>

      <section className={ProductDetailStle["pd-details"]}>
        <div className={ProductDetailStle["pd-tabs"]}>
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
          <div className={ProductDetailStle["pd-details__body"]}>
            <div className={ProductDetailStle["pd-desc"]}>
              <small className={ProductDetailStle["pd-eyebrow"]}>
                WHY YOU'LL LOVE IT
              </small>
              <h2>Made for all-day movement.</h2>
              <p>
                Lightweight, breathable, and endlessly wearable. CloudStep pairs
                a cushioned sole with a soft recycled-knit upper for comfort
                that keeps up with you.
              </p>
              <ul>
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <aside className={ProductDetailStle["pd-review"]}>
              <strong className={ProductDetailStle["pd-review__score"]}>
                4.9
              </strong>
              <p className={ProductDetailStle["pd-review__stars"]}>★★★★★</p>
              <p className={ProductDetailStle["pd-review__count"]}>
                Loved by 1,248 buyers
              </p>
              <p className={ProductDetailStle["pd-review__quote"]}>
                “Feels like walking on clouds. The color is even prettier in
                person!”
              </p>
              <small>— Mara C. · Verified purchase</small>
            </aside>
          </div>
        ) : (
          <div className={ProductDetailStle["pd-details__body"]}>
            <p className={ProductDetailStle["pd-empty"]}>
              {tabs[tab]} content goes here.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ProductDetail;
