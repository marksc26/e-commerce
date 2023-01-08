import React from 'react'
import { changeDateFormat } from '../../utils/date'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({purchase}) => {
  return (
    <article className='purchaseCard'>
        <h2>{changeDateFormat(purchase.createdAt)}</h2>
        <hr />
        <section>
            {
                purchase.cart.products.map(productPurchase => <ProductPurchase key={productPurchase.id} productPurchase={productPurchase}/>)
            }
        </section>
       

    </article>
  )
}

export default PurchaseCard