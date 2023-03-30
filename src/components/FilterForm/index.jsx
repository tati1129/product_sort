import React from 'react'
import { useDispatch } from 'react-redux';
import { searchProductsFilterAction, sortProductsFilterAction } from '../../store/reducer/productsReducer';
import s from './style.module.css';


export default function FilterForm() {
  const dispatch = useDispatch();

  const onSubmit =(e) => {
    e.preventDefault()
    const {title} = e.target
    console.log(title.value);
    dispatch(searchProductsFilterAction(title.value))
  }
  const sortOnChange = (e) =>{
    const target = +e.target.value;
    dispatch(sortProductsFilterAction(target));
}
    
   
  return (
    <div className={s.container}>
        
            <form className={s.form} onSubmit={onSubmit}>
            <input className={s.input} type="text" name='title' placeholder='Поиск...' />
            <input className={s.btn} type="submit"  />
            </form>
            <form className={s.price}>
              <label className={s.label}> Отсортировать по: 
                <select  className={s.option} onChange={sortOnChange}>
                  <option value="">price</option>
                  <option value="1">price ↑</option>
                  <option value="2">price ↓</option>
                </select>
              </label> 
            </form>
        
    </div>
  )
}
