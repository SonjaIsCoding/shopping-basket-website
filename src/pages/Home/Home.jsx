import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";

export function Home() {
  const [topProducts, setTopProducts] = useState([]);
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
        setTopProducts(response.data.filter((product) => product.top));
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
      {topProducts.map((product) => {
        return (
          <section key={product.id} className={styles.item}>
            <h2>{product.title}</h2>
            <div className={styles.content}>
              <p>TOP PRODUCT{product.top}</p>
              <p>{product.category}</p>
              <p>Description: {product.description}</p>
              <p>{product.price} $</p>
              <p>Stock :{product.stock}</p>
            </div>
          </section>
        );
      })}
    </>
  );
}
