import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({items}) => {
  return (
    <div className='product-img-div'>
      {
       items.map((item) => (
        <div className={`product-img-details ${item.category}`} key={item.id}>
           <div className="img-product">
             <Link to={`/shop/${item.id}`}>
               <img src={item.img} alt="" />
             </Link> 
           </div>
           <div className="product-details">
             <div className="name-price">
                <p className="product-name" id='pn'>{item.nameShop}</p>
                <p className="price">${item.price}</p>
             </div> 
           </div> 
        </div>
       )) 
      }
    </div>
  )
}

export default Products