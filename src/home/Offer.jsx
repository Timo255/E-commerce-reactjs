import React from 'react'
import { Link } from 'react-router-dom'

const offer = [
    {
        id : 9,
        category: "Cushion",
        name : "black futon",
        price : 500,
        img1 : "/images/product black futon.png",
        img : "/images/desktop black futon.png",
        imgDesktop437w : "/images/desktop black futon.png",
        imgMobile360w : "/images/mobile black futon.png",
        imgProductCard : "/images/black futon.png",
        variationTitle : "Color",
        variation : [
          {
            idv : 9,
            name : "black futon",
            classname : "variation color cushion color-black",
            colorData : "black futon",
            colorData1 : "black",
            urlImg : "/images/black futon.png"  
         },
         {
            idv : 20,
            name : "red futon",
            classname : "variation color cushion color-green",
            colorData : "red futon",
            colorData1 : "red",
            urlImg : "/images/red futon.png" 
         }
        ],
        quantity : 1
       }     
]

const Offer = () => {
  return (
    <>
      {
      offer.map((off) => (
        <Link key={off.id} to={`/shop/${off.id}`} className="offerLink">
           <div id="offer">
             <div className="offer-details">
               <p className="discount">DISCOUNTED</p>
               <p className="sofa">Wonder Sofa</p>
               <p className="offer-discount">25% </p> <p className="off">off</p> <p className="on"> On Sale</p>  
             </div>
             <div className="offer-img">
               <img src={off.imgDesktop437w} alt="" 
               srcSet={`${off.imgDesktop437w} 437w,
                      ${off.imgMobile360w} 360w`}
               sizes="(max-width: 480px) 360px, 437px"       
               /> 
             </div>  
           </div> 
        </Link>
      ))  
      } 
    </>
  )
}

export default Offer