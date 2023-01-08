import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import './styles/ProductInfo.css'

const ProductInfo = ({product}) => {

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handlePlus = ()  =>{

        setQuantity(quantity + 1)
    }

    const handleMinus = () =>{

        const newValue = quantity - 1
        if(newValue>= 1){
            setQuantity(newValue)
        }
    }

    const handleAddProduct = () =>{
        const data = {
            id: product.id,
            quantity: quantity
        }
        dispatch(addProductCart(data))
    }

    
  return (
    <article className='productInfo'>
        <h2 className='productInfo-title'>{product?.title}</h2>
        <p className='productInfo-description'>{product?.description}</p>
        <footer className='productInfo-footer'>
            <div className='container-price' >
                <h3>Price</h3>
                <span>{product?.price}</span>
            </div>
            <div className='container-quantity'>
                <h3>Quantity</h3>
                <div className='container-counter'>
                    <div onClick={handleMinus}>-</div>
                    <h4>{quantity}</h4>
                    <div onClick={handlePlus}>+</div>
                </div>
            </div>
            <button onClick={handleAddProduct}>Add to Cart</button>
        </footer>

    </article>
  )
}

export default ProductInfo