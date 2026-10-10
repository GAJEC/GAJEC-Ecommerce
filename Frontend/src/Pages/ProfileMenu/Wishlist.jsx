import React, { useState } from "react";
import { PageHead, peso } from "./AccountLayout";

const initial = [
  { id: 1, name: "Radiance Barrier Serum", price: 649, shop: "Kind Skin", img: "" },
  { id: 2, name: "Court Classic Sneakers", price: 2199, shop: "Sole Studio", img: "" },
];

const Wishlist = () => {
  const [items, setItems] = useState(initial);

  return (
    <>
      <PageHead eyebrow="Saved items" title="Your wishlist" />
      <div className="acct-banner">
        <div>
          <strong>Smart Wishlist Alerts are active</strong>
          <p>We'll notify you about price drops, low stock, restocks, and shop promotions.</p>
        </div>
        <button className="acct-btn acct-btn--primary">Open wishlist</button>
      </div>
      <div className="acct-list">
        {items.length === 0 && <p className="acct-empty">Nothing saved yet. Tap the heart on any product to keep it here.</p>}
        {items.map((i) => (
          <div key={i.id} className="acct-card acct-row">
            <div className="acct-row__lead">
              {i.img ? <img className="acct-thumb" src={i.img} alt="" /> : <span className="acct-thumb" />}
              <div>
                <p className="acct-row__title">{i.name}</p>
                <p className="acct-row__meta">{peso(i.price)} · {i.shop}</p>
              </div>
            </div>
            <div className="acct-row__end">
              <button className="acct-link acct-link--danger"
                onClick={() => setItems((p) => p.filter((x) => x.id !== i.id))}>Remove</button>
              <button className="acct-btn">View</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
