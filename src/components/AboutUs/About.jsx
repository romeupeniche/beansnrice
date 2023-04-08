import Parallax from "../UI/Parallax/Parallax";
import styles from "./About.module.css";

const About = () => {
  return (
    <>
      <Parallax className={styles.parallax}>With the best chiefs</Parallax>
      <section id="about" className={styles.about}>
        <div className={styles.chief}>
          <img
            src="https://images.unsplash.com/photo-1618862633131-289f00c6a09e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="A chief cutting meat"
          />
          <p>
            Our chefs are the best in the country. Always seeking the best
            flavors and the best qualities to deliver to you.
          </p>
        </div>
        <div className={styles.chief}>
          <img
            src="https://images.unsplash.com/photo-1488992783499-418eb1f62d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1289&q=80"
            alt="Chief preparing cooked dish"
          />
          <p>
            Inexplicably good flavors come out of our kitchen every day, ready
            to reach your table.
          </p>
        </div>
        <div className={styles.chief}>
          <img
            src="https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Chief preparing cooked dish"
          />
          <p>
            Enjoy our Brazilian cuisine with chefs from all over the world,
            ready to make you want to come back.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
