import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotals } from './features/cart/CartSlice';

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  },[cartItems, dispatch]);
  return (
    <div className="App">
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
