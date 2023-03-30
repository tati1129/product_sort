import React from 'react'
import { useDispatch } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { addProduct } from '../../store/reducer/productsReducer';
import s from './style.module.css'

export default function AddFormPage() {
  const dispatch = useDispatch();
  const notify = () => toast('Продукт добавлен');

  const onSubmit = (e) => {
    e.preventDefault();
    const {title, price, discount} = e.target;
    dispatch(addProduct(title.value, price.value, discount.value));
    notify();
    title.value = '';
    price.value = '';
    discount.value = '';
  }

  return (
      <div className={s.container} >
        <form className={s.form} onSubmit={onSubmit}>
          <input type="text" name='title' placeholder='Название' required/>
          <input type="number" name='price' placeholder='Цена' required/>
          <input type="number" name='discount' placeholder='Процент скидки' />
          <input className={s.submit} type="submit" value='Добавить'/>
          <ToastContainer autoClose={1000} theme='light' hideProgressBar={true} />
        </form>
      </div>
  )
}
