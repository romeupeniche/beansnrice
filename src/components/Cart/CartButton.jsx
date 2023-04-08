import CartIcon from "./CartIcon";
import styles from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const itemsQuantity = useSelector((state) => state.meals.totalQuantity);

  const closeCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  const buttonClasses = props.className ?? "";

  return (
    <button
      className={`${styles.button} ${buttonClasses}`}
      onClick={closeCartHandler}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
