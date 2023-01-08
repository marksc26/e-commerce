import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/home/Categories'
import ProductCard from '../components/home/ProductCard'
import { getAllProducts } from '../store/slices/products.slice'
import './styles/Home.css'
const Home = () => {
    const [nameProduct, setNameProduct] = useState("")
    const [filterProducts, setFilterProducts] = useState([])
    const [category, setCategory] = useState("")

const products = useSelector(state => state.products)


const handleSubmit = (e) =>{
    e.preventDefault()
    const newName = e.target.nameProduct.value
    setNameProduct(newName)
}



    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(getAllProducts())

    }, [])

    useEffect(() =>{
        setFilterProducts(products)

    }, [products])

    useEffect(() =>{

        const newProducts = products.filter(product => product.title.includes(nameProduct)&&(product.category.id === category|| category === ""))

        setFilterProducts(newProducts)

    },[nameProduct, category])



  return (
    <main className='home'>
        <form className='home-form' onSubmit={handleSubmit}>
            <div className='home-formDiv'>
                <input type="text" id='nameProduct' placeholder='What are you looking for?' />
                <button><i class='bx bx-search'></i></button>
            </div>
        </form>
        <Categories setCategory={setCategory}/>
        <section className='home-containerProducts'>
            {
                filterProducts.map(product => <ProductCard key={product.id} product={product}/>)
            }
        </section>
        
    </main>
  )
}

export default Home