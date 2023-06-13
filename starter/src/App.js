import NavBar from "./components/NavBar";
import CartContainer from "./components/CartContainer"
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.cartItems);
  const {isOpen} = useSelector(store => store.modal);

 useEffect(() => {
  dispatch(calculateTotals());
 }, [cartItems])

  return (
    <main>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </main>
  )
}
export default App;
