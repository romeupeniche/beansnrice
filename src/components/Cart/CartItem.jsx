import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
import { mealsActions } from "../../store/meals-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, img, alt } = props.item;

  const removeItemHandler = () => {
    dispatch(mealsActions.removeItem(id));
  };
  const addItemHandler = () => {
    dispatch(
      mealsActions.addItem({
        id,
        title,
        price,
      })
    );
  };

  return (
    <li className={styles.item}>
      <img src={img} alt={alt} />
      <div className={styles.info}>
        <header>
          <h3>{title}</h3>
          <span className={styles.itemprice}>(${price.toFixed(2)}/item)</span>
        </header>
        <div className={styles.details}>
          <div>
            <span className={styles.price}>${total.toFixed(2)}</span> (x{" "}
            <span className={styles.quantity}>{quantity}</span>)
          </div>
          <div className={styles.actions}>
            <button onClick={removeItemHandler}>-</button>
            <button onClick={addItemHandler}>+</button>
          </div>
        </div>
        <hr />
      </div>
    </li>
  );
};

export default CartItem;
