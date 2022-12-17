import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/CartSlice';
import { closeModal } from '../features/modal/ModalSlice';

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className='modal-container'>
        <div className='modal'>
            <h4>把物品全部清空嗎?</h4>
            <div className='btn-container'>
              <button className='btn confirm-btn' onClick={() => {
                dispatch(clearCart());
                dispatch(closeModal());
              }}>是</button>
              <button className='btn clear-btn' onClick={() => dispatch(closeModal())}>不需要</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal