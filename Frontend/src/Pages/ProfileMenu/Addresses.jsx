import React, { useState } from "react";
import { PageHead } from "./AccountLayout";

const initial = [
  { id: 1, label: "Home", name: "Andrea Mendoza", line: "24 Maharlika Street, Brgy. Sacred Heart, Quezon City 1103", phone: "+63 917 555 0142", isDefault: true },
  { id: 2, label: "Work", name: "Andrea Mendoza", line: "One Ayala Tower, Ayala Avenue, Makati City 1226", phone: "+63 917 555 0142", isDefault: false },
];

const Addresses = () => {
  const [list, setList] = useState(initial);

  const setDefault = (id) => setList((p) => p.map((a) => ({ ...a, isDefault: a.id === id })));
  const remove = (id) => setList((p) => p.filter((a) => a.id !== id));

  return (
    <>
      <PageHead eyebrow="Delivery details" title="Saved addresses">
        <button className="acct-btn acct-btn--primary">+ Add address</button>
      </PageHead>
      <p className="acct-note">{list.length} saved delivery {list.length === 1 ? "address" : "addresses"}</p>
      <div className="acct-grid">
        {list.length === 0 && <p className="acct-empty">Add an address to speed up checkout.</p>}
        {list.map((a) => (
          <article key={a.id} className="acct-card acct-address">
            <p className="acct-tag">{a.label}{a.isDefault && " · Default"}</p>
            <h3>{a.name}</h3>
            <p className="acct-row__meta">{a.line}</p>
            <p className="acct-row__meta">{a.phone}</p>
            <div className="acct-actions">
              <button className="acct-link">Edit</button>
              {!a.isDefault && (
                <>
                  <button className="acct-link acct-link--danger" onClick={() => remove(a.id)}>Delete</button>
                  <button className="acct-link" onClick={() => setDefault(a.id)}>Set default</button>
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default Addresses;
