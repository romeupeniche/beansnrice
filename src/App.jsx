import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import About from "./components/AboutUs/About";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";

function App() {
  const cartIsVisible = useSelector((state) => state.cart.isVisible);

  return (
    <>
      {cartIsVisible && <Cart />}
      <Header />
      <MealsList />
      <About />
      <Footer />
    </>
  );
}

export default App;
