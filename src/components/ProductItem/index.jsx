import React from 'react'
import { useDispatch } from 'react-redux';
import {deleteProduct} from '../../store/reducer/productsReducer'
import s from './style.module.css'

export default function ProductItem({id, title, price, discount}) {
    const dispatch = useDispatch();
const discountprice = Math.floor((+price - +price*discount/100));

    
  return (
    <div className={s.wrapper}>
        <div className={s.block}>
            <p>{title}</p>
              <div className={s.price}> Цена: 
              { discount <= 0 
                ? <div className={s.price_total}>
                    <p>{price}</p>  <p></p></div> 
                : <div className={s.price}> 
                        <p className={s.price_all}>{price}</p> 
                        <p className={s.price_discount}>{discountprice}</p>
                    </div>}
                
                </div>  
            {/* <p className={s.price}>Цена: {price}</p>
            <p className={s.discount}>
                {discountprice !== price 
                ? discountprice
                : ''}
            </p>  */}
            <button className={s.btn} onClick={() => dispatch(deleteProduct(id))}>X</button> 
        </div>
            
    </div>
  )
}
