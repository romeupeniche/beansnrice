import styles from "./ResponsiveHeader.module.css";
import CartButton from "../Cart/CartButton";
import Modal from "../UI/Modal/Modal";

const ResponsiveHeader = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.navigation}>
            <li onClick={props.onClose}>
              <a href="#menu">Menu</a>
            </li>
            <li onClick={props.onClose}>
              <a href="#about">About Us</a>
            </li>
            <li onClick={props.onClose}>
              <CartButton className={styles["card-button"]} />
            </li>
          </ul>
        </nav>
      </header>
    </Modal>
  );
};

export default ResponsiveHeader;
