import React from 'react'

const ProductPurchase = ({productPurchase}) => {
  return (
    <article className='productPurchase'>
        <h3 className='title'>{productPurchase.title}</h3>
        <h3 className='quantity'>{productPurchase.productsInCart.quantity}</h3>
        <h3 className='price'>${(productPurchase.productsInCart.quantity * productPurchase.price).toFixed(2)}</h3>

    </article>
  )
}

export default ProductPurchase