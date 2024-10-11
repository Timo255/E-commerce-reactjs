import React, { useContext, useEffect, useState } from 'react'
import { ProductCartAuth } from '../Context/OveralProvider'

const CartPage = () => {
    // const [cartItems, setCartItems] = useState([])
    const {
        cartItems, 
        handleQuantity,
        calculateTotalPrice,
        removeItem,
        cartSubtotal,
        finalTotal
    } = useContext(ProductCartAuth)

   
  return (
    <div className='wrapper-div'>
      <div className="cartContent">
        <div className="contentHeader">
            <div className="titleName">Product</div>
            <div className="titleQuantity">Quantity</div>
            <div className="titleSubtotal">Subtotal</div>
        </div>
        <div className="cartItems">
            {
            cartItems.map((item, index) =>(
                <div className="item" key={index} data-id={item.id}>
                    <div className="itemProduct">
                    <div className="itemImg">
                        <img src={item.img} alt="" /> 
                    </div> 
                    <div className="itemImgDetails">
                        <p className="cName">Name: {item.name}</p>
                        <p className="cPrice"><span className="cpLabel">Price:</span> ${item.price}</p>
                        <p className="vari"><span className="cvLabel">Variation: </span>{item.variation}</p>
                        <p className="del" onClick={() => removeItem(item)}>remove</p>
                    </div>
                    </div>
                    <input className="quantity"  type="number" value={item.quantity} onChange={(e) => handleQuantity(item)} min="1"></input>
                    <div className="subtotal">${calculateTotalPrice(item)}</div>
                </div>
            ))  
            }
        </div> 
        <div className="cartTotal">
            <div className="Sbt">
                <p className="sbtTitle">Subtotal</p>
                <p className="sbtValue">${cartSubtotal}</p> 
            </div>
            <div className="Tax">
                <p className="tax">Shipping and Handling</p>
                <p className="taxValue">${cartItems.length > 0 ? 10 : 0}</p>
            </div>
            <div className="Total">
                <p className="ttlTitle">Total</p>
                <p className="ttlValue">${finalTotal}</p>
            </div>
        </div>
        <div className="checkout">Proceed To Checkout</div>
    </div> 
    </div>
  )
}

export default CartPage