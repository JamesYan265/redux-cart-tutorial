import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from '../features/modal/ModalSlice';
import CartItem from './CartItem';



const CartContainer = () => {
  const dispatch = useDispatch();
  const { amount, cartItems, total } = useSelector((store) => store.cart);
  if(amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>購物車中</h2>
          <h4 className='empty-cart'>沒有任何的物品．．．🙀</h4>
        </header>
      </section>
    )
  } 

  return (
    <section className='cart'>
      <header>
        <h2>購物車中</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item}/>
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            總計 <span>{total} 元</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>全部刪除</button>
      </footer>
    </section>
  )
}

export default CartContainer