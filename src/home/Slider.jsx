import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import leftArrow from '/images/left.png'
import rightArrow from "/images/right arrow.png"

const sliderProducts = [
  {
    id : 1,
    category: "Chair",
    nameShop : "White leather sofa",
    nameProduct : "1seater white leather sofa",
    price : 229,
    img : "/images/Product 1seater white-sofa.png",
    imgLg439 : "/images/sleeper-sofa-desktop.png",
    imgMd309 : "/images/sleeper-sofa-Tablet.png",
    imgMd360 : "/images/sleeper-sofa-mobile.png",
    imgProductCard : "/images/1seater white-sofa.png",
    variationTitle : "Seater",
    variation : [
        {
           classname : "variation Seater whiteLeatherSofa vari-1seater active-seater",
           text : "1seater" 
        },
        {
           classname : "variation Seater whiteLeatherSofa vari-3seater",
           text : "3seater"
        }
    ],
    quantity : 1
   },
   {
    id : 3,
    category: "Chair",
    nameShop : "Brown sofa",
    nameProduct : "2seater brown sofa",
    price : 200,
    img : "/images/product 2seater brown sofa.png",
    imgLg439 : "/images/slide desktop sofa1.png",
    imgMd309 : "/images/slide tablet sofa1.png",
    imgMd360 : "/images/slide mobile sofa1.png",
    imgProductCard : "/images/2seater brown sofa.png",
    variationTitle : "Seater",
    variation : [
        {
           classname : "variation Seater brownSofa vari-2seater active-seater",
           text : "2seater" 
        },
        {
           classname : "variation Seater brownSofa vari-1seater",
           text : "1seater" 
        }
    ],
    quantity : 1
   },
   {
    id : 5,
    category: "Chair",
    nameShop : "Purple Sofa 3seater",
    nameProduct : "Purple Sofa (3seater)",
    price : 300,
    img : "/images/product 3seater purple  sofa.png",
    imgLg439 : "/images/slide desktop sofa2.png",
    imgMd309 : "/images/slide tablet sofa2.png",
    imgMd360 : "/images/slide mobile sofa2.png",
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
   }
]

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(slideIndex === sliderProducts.length){
        setSlideIndex(1)
      }else{
        setSlideIndex(slideIndex + 1)
      }
    },6000);
    return () => clearTimeout(timer);
  }, [slideIndex]);
  
  const nextSliderImg = () =>{
    if(slideIndex !== sliderProducts.length){
      setSlideIndex(slideIndex + 1)
    }else if(slideIndex === sliderProducts.length){
      setSlideIndex(1)
    }
  }

  const prevSliderImg = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
    }else if(slideIndex === 1){
      setSlideIndex(sliderProducts.length)
    }
  }

  return (
    <div id="advert-div">
      <div className="wrapper-div">
          <div className="slider">
            {
             sliderProducts.map((slide,index) => (
              <div key={slide.id} className={`advert-content-img ${slideIndex === index + 1 ? "slide current" : "slide"}`}>
                <div className="advert-content">
                  <p className="header">{slide.nameShop}</p>
                  <p className="advert-details">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Qui amet quasi numquam voluptatibus ratione,<br/>illo aliquid, nulla voluptas veniam eius et?
                  </p>
                  <Link to={`/shop/${slide.id}`}><button id="buyNow">Buy Now</button></Link> 
                </div>
                <div className="advert-img">
                  <img src={slide.imgLg439} alt="" 
                       srcSet={`${slide.imgLg439} 439w,
                               ${slide.imgMd309} 209w,
                               ${slide.imgMd360} 360w`}
                       sizes='(max-width: 480px) 360px,
                                (max-width: 1024px) 309px, 439px'            
                  />
                </div>
              </div>
             ))  
            }
          </div>
      </div>
      <div className="arrows">
        <img onClick={prevSliderImg} src={leftArrow} alt="" className='left-arrow'/>
        <img onClick={nextSliderImg} src={rightArrow} alt="" className='right-arrow'/>
      </div>
    </div>
  )
}

export default Slider