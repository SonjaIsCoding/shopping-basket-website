import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../../assets/Animation/Loading.jsx";

export function ProductDetails() {
  const [detailProduct, setDetailProduct] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { productId } = useParams();

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
        setDetailProduct(
          response.data.filter((product) => product.id === productId)[0]
        );
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    }
    loadProducts();
  }, [productId]);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <h1>Product Details - {productId}</h1>;
      <section className={StyleSheet.detail}>
        <h1>{detailProduct.title}</h1>
        <div className={StyleSheet.content}>
          <p>{detailProduct.category}</p>
          <p>Description: {detailProduct.description}</p>
          <p>{detailProduct.price} $</p>
          <p>Stock :{detailProduct.stock}</p>
        </div>
      </section>
    </>
  );
}
