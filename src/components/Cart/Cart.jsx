import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card/Card";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal/Modal";
import { cartActions } from "../../store/cart-slice";
import { useState } from "react";
import CartForm from "./Form/CartForm";

const Cart = (props) => {
  const [isForm, setIsForm] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.meals.items);
  const closeCartHandler = () => {
    dispatch(cartActions.toggle());
  };

  const openFormHandler = () => {
    if (!cartHasItems) return;
    setIsForm(true);
  };

  const itemsQuantity = useSelector((state) => state.meals.totalQuantity);
  const cartHasItems = itemsQuantity !== 0;

  return (
    <Modal onClose={closeCartHandler}>
      <Card className={styles.cart}>
        {!isForm && (
          <>
            <h2>
              {cartHasItems ? "Your Shopping Cart" : "Your Cart Is Empty!"}
            </h2>
            <ul>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    title: item.title,
                    quantity: item.quantity,
                    total: item.totalPrice,
                    price: item.price,
                    id: item.id,
                    img: item.img,
                    alt: item.alt,
                  }}
                />
              ))}
            </ul>
          </>
        )}
        {isForm && (
          <>
            <CartForm />
          </>
        )}
        <div className={styles.actions}>
          {cartHasItems && !isForm && (
            <button onClick={openFormHandler}>Place Order</button>
          )}
        </div>
      </Card>
    </Modal>
  );
};

export default Cart;
