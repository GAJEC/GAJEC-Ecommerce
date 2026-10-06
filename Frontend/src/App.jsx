import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import ProductDetail from "./Pages/ProductDetail.jsx";

import AccountLayout from "./Pages/ProfileMenu/AccountLayout.jsx";
import Overview from "./Pages/ProfileMenu/Overview.jsx";
import Orders from "./Pages/ProfileMenu/Orders.jsx";
import Returns from "./Pages/ProfileMenu/Returns.jsx";
import Wishlist from "./Pages/ProfileMenu/Wishlist.jsx";
import Vouchers from "./Pages/ProfileMenu/Vouchers.jsx";
import Addresses from "./Pages/ProfileMenu/Addresses.jsx";
import Payments from "./Pages/ProfileMenu/Payments.jsx";
import Notifications from "./Pages/ProfileMenu/Notifications.jsx";
import Settings from "./Pages/ProfileMenu/Settings.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/product/:id" element={<><Navbar /><ProductDetail /></>} />

        <Route path="/account" element={<><Navbar /><AccountLayout /></>}>
          <Route index element={<Overview />} />
          <Route path="orders" element={<Orders />} />
          <Route path="returns" element={<Returns />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="vouchers" element={<Vouchers />} />
          <Route path="addresses" element={<Addresses />} />
          <Route path="payments" element={<Payments />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;