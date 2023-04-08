import styles from "./MealsList.module.css";
import { useCallback, useEffect, useState } from "react";
import Meals from "./Meals";
import Parallax from "../UI/Parallax/Parallax";

const MealsList = () => {
  const [availableMeals, setAvailableMeals] = useState([]);

  const dataUrl =
    "https://beansnrice-56f0c-default-rtdb.firebaseio.com/meals.json";

  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(dataUrl);

      if (!response.ok) {
        throw new Error("macaco");
      }
      const data = await response.json();
      console.log(data);

      let loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          img: data[key].img,
          alt: data[key].alt,
        });
      }

      const transformedMeals = loadedMeals.map((meal) => {
        return {
          id: meal.id,
          name: meal.name,
          price: meal.price,
          img: meal.img,
          alt: meal.alt,
        };
      });
      setAvailableMeals(transformedMeals);
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const mealsList = availableMeals.map((meal) => (
    <Meals
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      img={meal.img}
      alt={meal.alt}
    />
  ));

  return (
    <>
      <Parallax className={styles.parallax}>Made with love</Parallax>
      <section id="menu" className={styles.main}>
        <h1>Menu</h1>
        <div className={styles.meals}>{mealsList}</div>
      </section>
    </>
  );
};

export default MealsList;
