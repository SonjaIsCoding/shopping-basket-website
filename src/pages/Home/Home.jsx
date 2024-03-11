import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Home.module.css";

export function Home() {
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
        <h1>Rudis Resterampe</h1>
      </header>
      <>
        {console.log(products)}
        {products.map((product) => {
          return (
            <>
              <div className={styles.title}>
                <h1>{product.title}</h1>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <p>{product.stock}</p>
              </div>
            </>
          );
        })}
      </>
    </>
  );
}
