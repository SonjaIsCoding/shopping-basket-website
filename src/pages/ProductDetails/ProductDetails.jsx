import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function ProductDetails() {
  const { productId } = useParams();

  return (
    <>
      <h2>Product Detail</h2>
      {productId}
      {console.log(productId)}
      <Link to={`:productId`}>Product</Link>;
    </>
  );
}
