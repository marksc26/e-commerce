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
        <div className='productInfo-Img'>
        <img className='productImg' src={product?.productImgs[0]} alt="" />
        </div>
        
        <section className='productInfo-footer'>
            <div>
            <h2 className='productInfo-title'>{product?.title}</h2>
            <p className='productInfo-description'>{product?.description}</p>
            </div>
            <div className='container-price' >
                <h3>Price</h3>
                <span>$ {product?.price}</span>    <h3>Quantity</h3>
                <div className='container-counter'>
                    <div className='plus' onClick={handleMinus}><i className='bx bxs-minus-circle'></i></div>
                    <h4>{quantity}</h4>
                    <div className='minus' onClick={handlePlus}><i className='bx bxs-plus-circle'></i></div>
                </div>
                <div>
               <button onClick={handleAddProduct}>Add to Cart</button> 
                </div>
            </div>
            
            
        </section>

    </article>
  )
}

export default ProductInfo