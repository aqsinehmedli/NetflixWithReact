import React from 'react'
import { useState,useEffect } from 'react'
import ProductCards from '../trendingFilms/components/ProductCards'
const TrendingFilms = () => {
    const [products,setProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState(null)
    const getProducts = async () => {
        const response = await fetch(searchTerm ? 'http://localhost:5001/api/v1/movie/trending?searchTerm=${searchTerm}':'http://localhost:5001/api/v1/movie/trending',{
            method:"GET",
            headers:{
                Accept:  "application/json"
            }
        })
        const data = await response.json()
        console.log(data)
        setProducts(data.products)
    }
    useEffect(() => {
        getProducts()
    },[searchTerm])
  return (
    <div className='grid grid-cols-3 gap-10 p-10'>

        {
        products?.map(product => <ProductCards product={product} />) 
        }
    </div>
  )
}

export default TrendingFilms