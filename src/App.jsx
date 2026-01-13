import { Routes, Route } from "react-router";
import axios from "axios";
import HomePage from "./pages/home/HomePage.jsx";
import CheckoutPage from "./pages/Checkout/CheckoutPage.jsx";
import OrdersPage from "./pages/orders/OrdersPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get("/api/cart-items?expand=product");
      setCart(response.data);
    };

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path="/checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
      <Route path="/orders" element={<OrdersPage cart={cart} />} />
      <Route
        path="/tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
      <Route path="*" element={<NotFound cart={cart} />} />
    </Routes>
  );
}

export default App;
