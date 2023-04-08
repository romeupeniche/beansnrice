import styles from "./Header.module.css";
import CartButton from "../Cart/CartButton";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const [isRespMenu, setIsRespMenu] = useState(true);
  const toggleMenuHandler = () => {
    setIsRespMenu((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <CartButton />
          </li>
        </ul>
        <MenuIcon onClick={toggleMenuHandler} className={styles["menu-icon"]} />
      </nav>
      {isRespMenu && <ResponsiveHeader onClose={toggleMenuHandler} />}
      <div className={styles.title}>
        <h1>Beans N' Rice</h1>
      </div>
    </header>
  );
};

export default Header;
