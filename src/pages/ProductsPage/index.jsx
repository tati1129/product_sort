import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterForm from '../../components/FilterForm'
import ProductItem from '../../components/ProductItem'
import { resetProductsFilterAction } from '../../store/reducer/productsReducer'
import s from './style.module.css'

export default function ProductsPage() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(resetProductsFilterAction())
  },[])
  


    const product = useSelector(({products}) => products)
  return (
    <div className={s.container}>
        <FilterForm />
        <div className={s.productItem}>
            {
                product
                  .filter(({show}) => show)
                  .map(item => <ProductItem key={item.id} {...item} />)
            }
        </div>
            
    </div>
  )
}
