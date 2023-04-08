import styles from "./Footer.module.css";
import GitHubIcon from "../UI/GitHubIcon/GitHubIcon";
import { useState } from "react";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const emailIsValid = emailInput.trim().length !== 0;

  const changeEmailHandler = (e) => {
    setEmailInput(e.target.value);
  };

  const sendEmailHandler = (e) => {
    e.preventDefault();
    if (!emailIsValid) return;

    // Could send to backend here...

    setEmailInput("");
  };

  const buttonClasses = emailIsValid ? "" : `${styles.invalid}`;

  return (
    <>
      <div className={styles.triangle} />
      <div className={styles.footer}>
        <h1>Beans N' Rice</h1>
        <form onSubmit={sendEmailHandler}>
          <label htmlFor="email">Stay informed of our promotions!</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={changeEmailHandler}
            value={emailInput}
          />
          <button className={buttonClasses}>Send Email</button>
        </form>
        <a
          href="https://github.com/romeupeniche"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
    </>
  );
};

export default Footer;
