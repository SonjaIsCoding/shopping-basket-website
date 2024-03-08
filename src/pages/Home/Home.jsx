import { useState } from "react";

export function Home() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <ul>
        {products.map((product) => {
          <li>{product.title}</li>;
        })}
      </ul>
    </>
  );
}
