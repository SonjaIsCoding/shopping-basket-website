import "./NavBar.module.css";
import StyleSheet from "../NavBar/NavBar.module.css";

export default function NavBar() {
  return (
    <header>
      <nav className={StyleSheet.navbar}>
        <a href="/" className={StyleSheet.title}>
          Rudis Resterampe
        </a>
        <ul>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/basket">Basket</a>
          </li>
          <li>
            <a href="landingpage">Landing Page</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
