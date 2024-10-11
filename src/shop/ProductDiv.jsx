import React, { useState } from 'react'
import products from "/public/product.json"
import Products from './Products'



const ProductDiv = () => {
    const [items, setItems] = useState(products)
    const [selectedCategory, setSelectedCategory] = useState("All")

    const filterItems = (categItem) =>{
        const updatedItem = products.filter(item => {
           return item.category === categItem 
        })
        setSelectedCategory(categItem)
        setItems(updatedItem)
        // console.log(updatedItem)
    }

    const searchFilter = (e) => {
        const itemSearch = e.target.value.toLowerCase()
        const itemSearched = products.filter(item => {
            return item.nameShop.toLowerCase().includes(itemSearch)
        }) 
        setItems(itemSearched)
    } 

  return (
    <div className='wrapper-div'>
       <div id="Product-div">
        <h1>Our Product</h1>
        <div className="dash"></div>
        <div className='product-filter-search'>
         <div className="product-filter-btn">
          <a href="#" onClick={() => setItems(products)} className="filter-btn">All</a>
          <a href="#" onClick={() => filterItems("Chair")} className="filter-btn">Chair</a>
          <a href="#" onClick={() => filterItems("Cushion")} className="filter-btn">Cushion</a>
          <a href="#" onClick={() => filterItems("Table")} className="filter-btn">Table</a>
          <a href="#" onClick={() => filterItems("Bed")} className="filter-btn">Bed</a>
         </div> 
         <div className="searchBox">
          <input type="search" id="searchField" placeholder="search items" onChange={searchFilter}/>
         </div>
       </div>
        
        {/* products */}
        <Products items={items}/>

       </div>     
    </div>
  )
}

export default ProductDiv