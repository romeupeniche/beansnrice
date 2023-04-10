import styles from "./Header.module.css";
import CartButton from "../Cart/CartButton";
import MenuIcon from "./MenuIcon";
import { useState, useRef, useEffect } from "react";
import ResponsiveHeader from "./ResponsiveHeader";

const Header = () => {
  const titleRef = useRef();
  const [titleIsNotVisible, setTitleIsNotVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setTitleIsNotVisible(!entry.isIntersecting);
    });
    observer.observe(titleRef.current);
  }, []);

  const navigationClasses = titleIsNotVisible
    ? `${styles.navigation} ${styles["title-isnt-visible"]}`
    : styles.navigation;

  const [isRespMenu, setIsRespMenu] = useState(false);
  const toggleMenuHandler = () => {
    setIsRespMenu((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={navigationClasses}>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <CartButton titleIsNotVisible={titleIsNotVisible} />
          </li>
        </ul>
        <MenuIcon onClick={toggleMenuHandler} className={styles["menu-icon"]} />
      </nav>
      {isRespMenu && <ResponsiveHeader onClose={toggleMenuHandler} />}
      <div className={styles.title}>
        <h1 ref={titleRef}>Beans N' Rice</h1>
      </div>
    </header>
  );
};

export default Header;
