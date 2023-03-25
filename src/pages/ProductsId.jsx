import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/productId/ProductInfo'
import SimilarProducts from '../components/productId/SimilarProducts'
import '../pages/styles/ProductsId.css'
const ProductsId = () => {

    const {id} = useParams()

    const [product, setProduct] = useState()
    const [categories, setCategories] = useState()

    useEffect(() =>{

        const URL= `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
        axios.get(URL)
            .then(res => setProduct(res.data.data.product))
            .catch(err => console.log(err))

    },[id])

    useEffect(() =>{

        const URL= "https://e-commerce-api.academlo.tech/api/v1/products/categories"
        axios.get(URL)
            .then(res => setCategories(res.data.data.categories))
            .catch(err => console.log(err))

    },[id])


  return (
    <main className='productId'>
        <ProductInfo product={product} />
        <h2 className='title'>You may also like</h2>
        <SimilarProducts categories={categories} product={product}/>
        
    </main>
  )
}

export default ProductsId