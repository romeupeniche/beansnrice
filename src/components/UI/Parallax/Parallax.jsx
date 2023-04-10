import styles from "./Parallax.module.css";

const Parallax = (props) => {
  return (
    <section className={`${styles.parallax} ${props.className}`}>
      <p>{props.children}</p>
    </section>
  );
};

export default Parallax;
