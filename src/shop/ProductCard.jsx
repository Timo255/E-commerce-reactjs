import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RelatedProducts from './RelatedProducts';
import ProductDetails from './ProductDetails';
// import products from "../../product.json"

const ProductCard = () => {
    const [product, setProducts] = useState([])
    // const {product} = useContext(ProductCartAuth)
    const {id} = useParams();

    useEffect(() =>{
        fetch("/product.json").then(res => res.json()).then(data => setProducts(data))
    }, [])
    // console.log(pr)

    const results = product.filter((p) => p.id === Number(id));
    // console.log(results)
    
  return (
    <div className='wrapper-div detailPage'>
     {
      results.map((item,index) => (
          <ProductDetails key={item.id} item={item}/>
      ))
     }

     {/* Related Product */}
     <RelatedProducts />
    </div>
  )
}

export default ProductCard