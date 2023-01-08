import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProductCar } from '../../store/slices/cart.slice'

const CartProduct = ({cartProduct, getAllProducts}) => {

     const dispatch = useDispatch()

    const handleDeleteProduct = () =>{

        dispatch(deleteProductCar(cartProduct.id))
        
    }


  return (
    <article className='cartProduct'>
        <h4>{cartProduct.brand}</h4>
        <h3>{cartProduct.price}</h3>
        <div className='container-quantity'>
            <p>{cartProduct.productsinCart.quantity}</p>
        </div>
        <footer className='cartProduct-footer'>
            <p><span>Total:</span>${(cartProduct.productsinCart.quantitty * cartProduct.price).toFixed(2)}</p>
        </footer>

        <i onClick={handleDeleteProduct} className='bx bx-trash'></i>

    </article>
  )
}

export default CartProduct