import { Outlet } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export function RootLayout() {
  const [products, setProducts] = useState([]);

  async function loadData() {
    try {
      const response = await axios.get(
        "https://prj-backend-shopping-basket.onrender.com/products"
      );
      console.log("response data:", response.data);

      setProducts(response.data);
    } catch (err) {
      console.log("Upsi!");
    }
  }
  loadData();

  return (
    <>
      <header>
        <h1>Rudis Resterampe</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
