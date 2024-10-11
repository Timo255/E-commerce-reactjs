import React from 'react'
import { Link } from 'react-router-dom'

const RelatedProducts = () => {
    const relatedProducts = [
        {
            id : 5,
            category: "Chair",
            nameShop : "Purple Sofa 3seater",
            nameProduct : "Purple Sofa (3seater)",
            price : 300,
            img : "/images/product 3seater purple  sofa.png",
            imgProductCard : "/images/3seater purple sofa.png",
            variationTitle : "Seater",
            variation : [
                {
                   classname : "variation Seater purpleSofa vari-1seater",
                   text : "1seater" 
                },
                {
                   classname : "variation Seater purpleSofa vari-3seater active-seater",
                   text : "3seater" 
                }
            ],
            quantity : 1
        },
        {
            id : 6,
            category: "Table",
            nameShop : "Circle wooden table",
            nameProduct : "Circle wooden table",
            price : 150,
            img : "/images/product Circle wooden table.png",
            imgProductCard : "/images/Circle wooden table.png",
            variationTitle : "Shapes",
            variation : [
                {
                   classname : "variation Shape woodTable vari-Circle active-shape",
                   text : "Circle" 
                },
                {
                   classname : "variation Shape woodTable vari-rectangle",
                   text : "rectangle" 
                },
                {
                    classname : "variation Shape woodTable vari-Oval",
                    text : "Oval" 
                }
            ],
            quantity : 1
        },
        {
            id : 7,
            category: "Table",
            nameShop : "Oval Glass table",
            nameProduct : "Oval Glass table",
            price : 180,
            img : "/images/product Oval Glass table.png",
            imgProductCard : "/images/Oval Glass table.png",
            variationTitle : "Shapes",
            variation : [
                {
                   classname : "variation Shape glassTable vari-Oval active-shape",
                   text : "Oval" 
                },
                {
                   classname : "variation Shape glassTable vari-Square",
                   text : "Square" 
                }
            ],
            quantity : 1
        },
        {
            id : 8,
            category: "Table",
            nameShop : "Bed",
            nameProduct : "Bed",
            price : 180,
            img : "/images/product bed.png",
            imgProductCard : "/images/Oval Glass table.png",
            variationTitle : "Dimensions",
            variation : [
                {
                   classname : "variation Dimensions Bed dim-30X40 active-bed",
                   text : "30X40" 
                },
                {
                   classname : "variation Dimensions Bed dim-50X40",
                   text : "50X40" 
                }
            ],
            quantity : 1
           }
    ]
      
  return (
    <div id='Product-div'>
      <h1>Related Product</h1>
      <div className="dash"></div>
      <div className="product-img-div">
        {
         relatedProducts.map(item => (
           <div className="product-img-details" key={item.id}>
             <div className="img-product">
                <Link to={`/shop/${item.id}`}>
                  <img src={item.img} alt="" />
                </Link>
             </div>
             <div className="product-details">
               <div className="name-price">
                <p className="product-name">{item.nameShop}</p>
                <p className="price">{item.price}</p>
               </div> 
             </div>
           </div> 
         ))   
        }
      </div>
    </div>
  )
}

export default RelatedProducts