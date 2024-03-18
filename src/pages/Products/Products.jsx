import { useEffect, useState } from "react";
import axios from "axios";
import StyleSheets from "../Products/Products.module.css";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiStar } from "react-icons/fi";
import { useParams } from "react-router-dom";
import CircularIndeterminate from "../../assets/Animation/Loading.jsx";

export function Products() {
  const [products, setProducts] = useState([]);
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
        setProducts(response.data);
      } catch (err) {
        setIsError(true);
        console.log(err);
      } finally {
        setIsLoading(false);
        setIsError(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) {
    return <CircularIndeterminate />;
  }

  return (
    <>
      <header>
        <h1>Products</h1>
      </header>
      <div>
        {products.map((product) => {
          return (
            <section key={product.id} className={StyleSheets.productitem}>
              <h2>{product.title}</h2>
              <Link to={"/favorites"}>
                <FiStar />
              </Link>
              <div className={StyleSheets.content}>
                <p>{product.category}</p>
                <p>Description: {product.description}</p>
                <p>{product.price} $</p>
                <p>Stock :{product.stock}</p>
              </div>
              <Link to={`/products/${product.title}`}>
                <FaMagnifyingGlass />
              </Link>
              <Link to={product.id}>Details</Link>
            </section>
          );
        })}
      </div>
    </>
  );
}
