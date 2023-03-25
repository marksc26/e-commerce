import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from '../components/cart/CartProduct'
import { getAllCartProducts, purchaseCart } from '../store/slices/cart.slice'
import './styles/Cart.css'
const Cart = () => {

  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)

  useEffect(() =>{

    dispatch(getAllCartProducts())

  },[])

  const handlePurchaseCart = () =>{
    const data = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references",
    };
    dispatch(purchaseCart(data))
  }



  return (
    <main className='cart'>
      <section className='cart-list'>
        {
          cart.map(cartProduct => <CartProduct key={cartProduct.id} cartProduct={cartProduct}/>)
        }
        {
          !cart.length && (
            <h2>Not Found Products in Cart</h2> 
          )
        }
      </section>
      <div className='cart-btn-container'>
        <button onClick={handlePurchaseCart}>Purchase cart</button>
      </div>

    </main>
  )
}

export default Cart