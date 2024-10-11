import React, { useContext, useEffect, useState } from 'react'
import { ProductCartAuth } from '../Context/OveralProvider';

const ProductDetails = ({item}) => {
    const {id,variation, category, price, variationTitle,nameProduct,quantity} = item;
    const {
      addToCart,
    } = useContext(ProductCartAuth)
    // console.log(typeof id)
 

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedText, setSelectedText] = useState("");
    const [prquantity, setQuantity] = useState(quantity);

    // console.log(variation.idv)
    

        /* image change when different variation is selected */
            const getImage = (varia) => { //function to get the image according to the variation we will be passing in 
            const image = item.variation.find((vari) => 
                    vari.name.includes(varia)
                );
                return image.urlImg || "";  
            }
        /* /image change when different variation is selected */

            const getPrice = (variaNames) => {
              const priceValue = item.variation.find((vari) => 
                    vari.name.includes(variaNames) 
              );
              return priceValue.priceV || "";
            }

            const getId = (variaName) => {
              const idValue = item.variation.find((vari) => 
                   vari.name.includes(variaName)
              );
              return idValue.idv || "";
            }
        
            useEffect(() =>{ // this useEffect updates initial setSelectedColor and setSelectedText, it saves the initial variation to the "selectedColor" & "selectedText",when we get the single product for the product details "helps as to have an active variation first then when you select another variation it changes"
                if(item && item.variation){
                setSelectedColor(item.variation[0].colorData1) 
                setSelectedText(item.variation[0].text1) 
                // setSelectedId(item.variation[0].id) 
                }
            }, [item,  setSelectedColor, setSelectedText])
      

    
  return (
    <div className="itemDetail" key={id} data-id={getId(selectedText ? selectedText : selectedColor)}>
    <div className="imgBox">
      <div className="bigImg">
        <img src={getImage(selectedColor ? selectedColor : selectedText)} alt="" />
      </div>
      </div>
      <div className="imgDetails">
      <p className="type">Home / {category}</p>
      <h1 className="name">{nameProduct}</h1>
      <h4 className="price">${selectedText ? getPrice(selectedText) : price}</h4>
      <h3 className="variTitle">{variationTitle}</h3>
       <div className="variBox">
       {
          variation.map((vari, i) => (
            <div key={i}>
                <div className={vari.colorData ? "variationActive" : "variations"}>
                  <div className={`${vari.classname} ${selectedColor === vari.colorData1 ? "active-color" : ""}`} data-color={vari.colorData1}
                  onClick={() => setSelectedColor(vari.colorData1)}></div>
                </div>
                <div className={vari.text1 ? "variationActive" : "variations"}>
                  <div className={`${vari.classname} ${selectedText === vari.text1 ? "active-text" : ""}`}
                  onClick={() => setSelectedText(vari.text1)}>{vari.text1}</div> 
                </div> 
            </div>
          ))
        }
  
       </div>
      <input className="quantity" type="number" value={prquantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1"/>
      <a href="#" className="btnAdd" onClick={() => 
      addToCart({
            selectedColor,
            selectedText,
            id: getId(selectedColor ? selectedColor : selectedText),
            img: getImage(selectedColor ? selectedColor : selectedText),
            name : nameProduct,
            price: selectedText ? getPrice(selectedText) : price,
            variation: selectedColor ? selectedColor : selectedText,
            quantity: prquantity
      })}>
        Add To Cart
      </a>
      <div className="productDesc">
          <h3 className="detailTiltle">Product Details</h3>
          <p className="desc">Give Your summer wardrobe a style upgrade with the HRX
            Men's Active T-shirt. Team it with a pair of shorts for 
            your morning workout or a denims for an evening out with
            the guys.</p>
        </div>
      </div>
  </div> 
  )
}

export default ProductDetails