import styles from "./Meals.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { mealsActions } from "../../store/meals-slice";

const Meals = (props) => {
  const dispatch = useDispatch();
  const addItemToCartHandler = () => {
    dispatch(
      mealsActions.addItem({
        id: props.id,
        price: props.price,
        quantity: 1,
        totalPrice: props.price,
        title: props.name,
        img: props.img,
        alt: props.alt,
      })
    );
  };

  return (
    <Card className={styles.meal}>
      <h3>{props.name}</h3>
      <h4 className={styles.price}>{`$${props.price.toFixed(2)}`}</h4>
      <img src={props.img} alt={props.alt} />
      <Button onClick={addItemToCartHandler}>Add to cart</Button>
    </Card>
  );
};

export default Meals;
