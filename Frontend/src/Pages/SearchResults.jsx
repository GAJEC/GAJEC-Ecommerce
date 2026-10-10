import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "../assets/styles/SearchResults.css";
import { products, CATEGORIES, categoryFromParam } from "../data/products";

const MIN_PRICE = 500;
const MAX_PRICE = 5000;
const RATINGS = [
  { label: "4.5 and above", value: 4.5 },
  { label: "4.0 and above", value: 4.0 },
];
const SORTS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
];

const peso = (n) => "₱" + n.toLocaleString("en-PH");
const toggleIn = (list, value) =>
  list.includes(value) ? list.filter((v) => v !== value) : [...list, value];

const SearchResults = () => {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const [cats, setCats] = useState(() => {
    const c = categoryFromParam(params.get("category"));
    return c ? [c] : [];
  });
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [ratings, setRatings] = useState([]);
  const [freeOnly, setFreeOnly] = useState(false);
  const [sameDayOnly, setSameDayOnly] = useState(false);
  const [sort, setSort] = useState("recommended");
  const [showFilters, setShowFilters] = useState(() => window.innerWidth > 900);
  const [liked, setLiked] = useState(() =>
    products.filter((p) => p.liked).map((p) => p.id),
  );

  useEffect(() => {
    const c = categoryFromParam(params.get("category"));
    setCats(c ? [c] : []);
  }, [params]);

  const clearAll = () => {
    setCats([]);
    setMaxPrice(MAX_PRICE);
    setRatings([]);
    setFreeOnly(false);
    setSameDayOnly(false);
  };

  const results = useMemo(() => {
    const minRating = ratings.length ? Math.min(...ratings) : 0;
    const list = products.filter(
      (p) =>
        (cats.length === 0 || cats.includes(p.category)) &&
        p.price <= maxPrice &&
        p.rating >= minRating &&
        (!freeOnly || p.freeDelivery) &&
        (!sameDayOnly || p.sameDay),
    );
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "rating") list.sort((a, b) => b.rating - a.rating);
    return list;
  }, [cats, maxPrice, ratings, freeOnly, sameDayOnly, sort]);

  const countCat = (c) => products.filter((p) => p.category === c).length;
  const countRating = (r) => products.filter((p) => p.rating >= r).length;
  const countFree = products.filter((p) => p.freeDelivery).length;
  const countSameDay = products.filter((p) => p.sameDay).length;
  const pct = ((maxPrice - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  return (
    <main className="sr">
      <nav className="sr-crumbs" aria-label="Breadcrumb">
        <Link to="/">Home</Link> <span>›</span> <span>Search results</span>
      </nav>

      <header className="sr-head">
        <div>
          <p className="sr-eyebrow">SEARCH RESULTS</p>
          <h1 className="sr-title">Find your next favorite</h1>
          <p className="sr-sub">
            {results.length} {results.length === 1 ? "product" : "products"}{" "}
            curated around your search
          </p>
        </div>
        <button
          type="button"
          className="sr-filter-btn"
          onClick={() => setShowFilters((v) => !v)}
          aria-expanded={showFilters}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
          Filters
        </button>
      </header>

      <div className={`sr-layout ${showFilters ? "" : "is-full"}`}>
        {showFilters && (
          <aside className="sr-side" aria-label="Filters">
            <div className="sr-side__head">
              <h2>Filters</h2>
              <button type="button" className="sr-clear" onClick={clearAll}>
                Clear all
              </button>
            </div>

            <fieldset className="sr-group">
              <legend>Category</legend>
              {CATEGORIES.map((c) => (
                <label key={c} className="sr-check">
                  <input
                    type="checkbox"
                    checked={cats.includes(c)}
                    onChange={() => setCats((p) => toggleIn(p, c))}
                  />
                  <span>{c}</span>
                  <em>{countCat(c)}</em>
                </label>
              ))}
            </fieldset>

            <fieldset className="sr-group">
              <legend>Price range</legend>
              <input
                type="range"
                className="sr-range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                step={100}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                style={{ "--pct": `${pct}%` }}
                aria-label="Maximum price"
              />
              <div className="sr-range__labels">
                <span>{peso(MIN_PRICE)}</span>
                <span>{peso(maxPrice)}</span>
              </div>
            </fieldset>

            <fieldset className="sr-group">
              <legend>Rating</legend>
              {RATINGS.map((r) => (
                <label key={r.value} className="sr-check">
                  <input
                    type="checkbox"
                    checked={ratings.includes(r.value)}
                    onChange={() => setRatings((p) => toggleIn(p, r.value))}
                  />
                  <span>{r.label}</span>
                  <em>{countRating(r.value)}</em>
                </label>
              ))}
            </fieldset>

            <fieldset className="sr-group">
              <legend>Delivery</legend>
              <label className="sr-check">
                <input
                  type="checkbox"
                  checked={freeOnly}
                  onChange={() => setFreeOnly((v) => !v)}
                />
                <span>Free delivery</span>
                <em>{countFree}</em>
              </label>
              <label className="sr-check">
                <input
                  type="checkbox"
                  checked={sameDayOnly}
                  onChange={() => setSameDayOnly((v) => !v)}
                />
                <span>Same-day delivery</span>
                <em>{countSameDay}</em>
              </label>
            </fieldset>
          </aside>
        )}

        <section className="sr-main">
          <div className="sr-toolbar">
            <p>
              Showing {results.length} featured{" "}
              {results.length === 1 ? "item" : "items"}
            </p>
            <label className="sr-sort">
              <span>Sort by</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {results.length === 0 ? (
            <div className="sr-empty">
              <p>No products match these filters.</p>
              <button type="button" className="sr-clear" onClick={clearAll}>
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="sr-grid">
              {results.map((p) => {
                const isLiked = liked.includes(p.id);
                return (
                  <article key={p.id} className="sr-card">
                    <button
                      type="button"
                      className="sr-card__link"
                      onClick={() => navigate(`/product/${p.id}`)}
                    >
                      <div
                        className="sr-card__img"
                        style={{ background: p.bg }}
                      >
                        {p.image && <img src={p.image} alt={p.name} />}
                        <span className="sr-card__badge">{p.badge}</span>
                      </div>
                      <div className="sr-card__body">
                        <p className="sr-card__shop">
                          {p.shop} <span className="sr-card__verified">✓</span>
                        </p>
                        <h3 className="sr-card__name">{p.name}</h3>
                        <p className="sr-card__price">
                          {peso(p.price)} <s>{peso(p.old)}</s>
                        </p>
                        <p className="sr-card__meta">
                          <span className="sr-card__star">★</span> {p.rating}
                          <span>{p.sold}</span>
                        </p>
                        {p.freeDelivery && (
                          <p className="sr-card__delivery">⛟ Free delivery</p>
                        )}
                      </div>
                    </button>
                    <button
                      type="button"
                      className={`sr-card__heart ${isLiked ? "is-liked" : ""}`}
                      aria-label={
                        isLiked ? "Remove from wishlist" : "Add to wishlist"
                      }
                      aria-pressed={isLiked}
                      onClick={() => setLiked((prev) => toggleIn(prev, p.id))}
                    >
                      {isLiked ? "♥" : "♡"}
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default SearchResults;
