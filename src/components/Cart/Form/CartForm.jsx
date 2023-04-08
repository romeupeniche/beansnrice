import { useDispatch } from "react-redux";
import useInput from "../../../hooks/use-input";
import styles from "./CartForm.module.css";
import { mealsActions } from "../../../store/meals-slice";
import { useState } from "react";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.includes(".");

const CartForm = (props) => {
  const dispatch = useDispatch();
  const [formIsSent, setFormIsSent] = useState();

  const [
    firstNameValue,
    firstNameIsValid,
    firstNameHasError,
    firstNameChangeHandler,
    firstNameBlurHandler,
    resetFirstName,
  ] = useInput(isNotEmpty);
  const [
    addressValue,
    addressIsValid,
    addressHasError,
    addressChangeHandler,
    addressBlurHandler,
    resetAddress,
  ] = useInput(isNotEmpty);
  const [
    emailValue,
    emailIsValid,
    emailHasError,
    emailChangeHandler,
    emailBlurHandler,
    resetEmail,
  ] = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && addressIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    // Could send to the backend here...

    dispatch(mealsActions.reset());

    resetFirstName();
    resetAddress();
    resetEmail();

    setFormIsSent(true);
  };

  const firstNameClasses = firstNameHasError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];
  const addressClasses = addressHasError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];
  const emailClasses = emailHasError
    ? `${styles["form-control"]} ${styles.invalid}`
    : styles["form-control"];

  return (
    <>
      {!formIsSent && (
        <form onSubmit={submitHandler}>
          <div className={firstNameClasses}>
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="name"
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className={styles["error-text"]}>Please enter a first name.</p>
            )}
          </div>
          <div className={addressClasses}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={addressValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            {addressHasError && (
              <p className={styles["error-text"]}>Please enter your address.</p>
            )}
          </div>
          <div className={emailClasses}>
            <label htmlFor="email">E-Mail Address</label>
            <input
              type="email"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className={styles["error-text"]}>
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className={styles["form-actions"]}>
            <button disabled={!formIsValid}>Place Order</button>
          </div>
        </form>
      )}
      {formIsSent && (
        <h3>Your order was sent! You will receive your receipt by email.</h3>
      )}
    </>
  );
};

export default CartForm;
