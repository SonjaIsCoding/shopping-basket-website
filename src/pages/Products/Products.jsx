import { useEffect, useState } from "react";
import axios from "axios";
import StyleSheets from "../Products/Products.module.css";

export function Products() {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      console.log("Load Data");
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://prj-backend-shopping-basket.onrender.com/products"
        );
        console.log(response.data);
        console.log(response.status);
        setProducts(response.data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <>
      <header>
        <h1>Products</h1>
      </header>
      <div>
        {products.map((product) => {
          return (
            <section key={product.id} className={StyleSheets.item}>
              <h2>{product.title}</h2>
              <div className={StyleSheets.content}>
                <p>{product.category}</p>
                <p>Description: {product.description}</p>
                <p>{product.price} $</p>
                <p>Stock :{product.stock}</p>
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
