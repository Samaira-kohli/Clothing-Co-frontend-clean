import React, { useContext, useEffect, useState } from "react";
import "./ProductDisplay.css";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import sizeChart from '../../assets/Frontend_Assets/SizeChart_menn.jpg';
import { ShopContext } from '../Context/ShopContext'

function ProductDisplay({ product }) {
  const {addToCart} = useContext(ShopContext)
  const [selectedSize, setSelectedSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [showChart, setShowChart] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  
  const [scale, setScale] = useState(false);


  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  function rightClick() {
    if (imgIndex < product.image?.length - 1) {
      setImgIndex(prev => prev + 1);
    }

    else{
      setImgIndex(0);
    }
  }

  function leftClick() {
    if (imgIndex > 0) {
      setImgIndex(prev => prev - 1);
    }

    else{
      setImgIndex(product.image.length-1);
    }
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])


  return (
    <>
      <div className={` ${zoom ? 'zoom-container' : "hidden"} `}>
        <img src={product.image?.[imgIndex]} alt={product.name} className={`zoom-img ${scale?'zoom-img-scale':''}`} onClick={()=>setScale(!scale)}/>
        <div className="zoom-buttons">
          <button className="left-button" onClick={leftClick}><ChevronLeft /></button>
          <button className="cross-button" onClick={() => setZoom(false)}><X/></button>
          <button className="right-button" onClick={rightClick}><ChevronRight /></button>
        </div>
      </div>
      <div className={`product-container ${zoom ? 'zoom' : ''}`}>

        {/* LEFT COLUMN - THUMBNAILS */}
        <div className="thumbnail-column">
          {product.image?.map((img, i) => (
            <img key={i} src={img} alt="" className={`thumbnail-img ${imgIndex === i?'border':''}`} onClick={() => setImgIndex(i)} />
          ))}
        </div>

        {/* MAIN IMAGE */}
        <div className="main-img-box">
          <img src={product.image?.[imgIndex]} alt={product.name} className={`main-img`} onClick={() => setZoom(true)} />
        </div>

        {/* RIGHT COLUMN - DETAILS */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <div className="price-row">
            <p className="old-price">Rs. {product.oldPrice}</p>
            <p className="new-price">Rs. {product.price}</p>
            <span className="sale-badge">Sale</span>
          </div>

          <p className="shipping-text">Shipping calculated at checkout.</p>

          {/* SIZE SELECTION */}
          <h3 className="section-heading">Size</h3>
          <div className="size-options">
            {sizes.map((s) => (
              <button
                key={s}
                className={`size-btn ${selectedSize === s ? "active" : ""}`}
                onClick={() => setSelectedSize(s) }
              >
                {s}
              </button>
            ))}
          </div>

          <p className="warning-text">
            ⚠ Please refer to our <b>Size Chart</b> below. Choosing the wrong size may result in fitting issues.
          </p>

          {/* SHOW SIZE CHART */}
          <p className="show-chart" onClick={() => setShowChart(!showChart)}>
            {showChart ? "Hide Size Chart" : "Show Size Chart"}
          </p>

          {showChart && (
            <img
              src={sizeChart}
              alt="Size Chart"
              className="size-chart-img"
            />
          )}

          {/* QUANTITY */}
          {/* <h3 className="section-heading">Quantity</h3>

          <div className="qty-box">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
              –
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div> */}

          {/* ADD TO CART */}
          <button className="cod-btn" onClick={()=>addToCart(product.id, selectedSize)}>Add to cart</button>

        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
