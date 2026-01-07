import axios from "axios";
import Header from "../../components/Header";
import CheckmarkIcon from "../../assets/images/icons/checkmark.png";
import "./Homepage.css";
import { useEffect, useState } from "react";
import ProductsGrid from "./ProductsGrid";

const HomePage = ({ cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  });

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" href="/home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
};

export default HomePage;
