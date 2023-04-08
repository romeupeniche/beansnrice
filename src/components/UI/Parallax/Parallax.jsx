import styles from "./Parallax.module.css";

const Parallax = (props) => {
  return (
    <section className={`${styles.parallax} ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Parallax;
