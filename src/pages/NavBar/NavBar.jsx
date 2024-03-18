import "./NavBar.module.css";
import StyleSheet from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { LuShoppingBasket } from "react-icons/lu";
import { FiStar } from "react-icons/fi";

export default function NavBar() {
  return (
    <header>
      <nav className={StyleSheet.navbar}>
        <NavLink to={"/"} className={StyleSheet.title}>
          Rudis Resterampe
        </NavLink>
        <ul>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"landingpage"}>Landing Page</NavLink>
          </li>
          <li>
            <NavLink to={"/favorites"}>
              <FiStar />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/basket"}>
              <LuShoppingBasket />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
