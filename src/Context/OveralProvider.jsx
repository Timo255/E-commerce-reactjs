import { createContext, useEffect, useState } from "react";


export const ProductCartAuth = createContext();

const OveralProvider = ({children}) => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const [cartItems, setCartItems] = useState(storedCartItems)


    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cartItems));
    },[cartItems])

  

const addToCart = ({id, img, name, price, variation, quantity}) => {
    const product = {
        id: id,
        img: img,
        name : name,
        price: price,
        variation: variation,
        quantity:quantity
    }
    

    const existingProductIndex = cartItems.filter(
      (item) =>  
        Number(item.id) === parseInt(product.id) && 
        item.variation === product.variation
    );

    if(!existingProductIndex.length){
        setCartItems([...cartItems, product])
    }
    else{
        alert("item already added to cart")
        return;
    }
}


const handleQuantity = (item) => {
   item.quantity = event.target.value;
   
   setCartItems([...cartItems]);

}

const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
}

const removeItem = (item) => {
   const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

   setCartItems(updatedCart)

//    updateLocalStorage(updatedCart)
}

const updateLocalStorage = (cart) => {
   localStorage.setItem("cart", JSON.stringify(cart)); 
}
const cartNumber = cartItems.reduce((total, item) =>{
    return parseInt(total) + parseInt(item.quantity)
  },0)

// cart subtotal
const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item)
}, 0)

// total
const shipping = cartItems.length > 0 ? 10 : 0
const finalTotal = parseInt(cartSubtotal) + shipping




    const contextValue = {
        addToCart,
        cartItems, 
        handleQuantity,
        calculateTotalPrice,
        removeItem,
        cartNumber,
        cartSubtotal,
        finalTotal
    }
    return(
        <ProductCartAuth.Provider value={contextValue}>
            {children}
        </ProductCartAuth.Provider>
    )
}

export default OveralProvider

