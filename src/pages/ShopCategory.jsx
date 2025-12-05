import React, { useContext, useState } from "react";
import Product from "../Components/productsss/Product";
import { ShopContext } from "../Components/Context/ShopContext";
import './ShopCategory.css'
import { ChevronDown } from 'lucide-react'


function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  const [sub, setSub] = useState("ALL")
  const [availability, setAvailability] = useState("ALL")
  const [priceTo, setPriceTo] = useState(3000)
  const [priceFrom, setPriceFrom] = useState(0)
  const [showPrice, setShowPrice] = useState(false)
  const [showAvailability, setShowAvailability] = useState(false)
  const [showSize, setShowSize] = useState(false)
  const [size, setSize]= useState([])

  const subCategoryWomen = ['ALL', 'DRESSES', 'FORMALS', 'CO-ORDS', 'ETHNIC WEAR', 'ACTIVEWEAR', 'TOPS']
  const subCategoryMen = ['ALL', 'T-SHIRTS', 'JACKETS', 'BOTTOM WEAR', 'TRACKSUITS', 'CO-ORDS']

  const subCategoryList =
    props.category === "women" ? subCategoryWomen : subCategoryMen;

  const sizeList = ['XS', 'S', 'M', 'L', 'XL'];
  
  //filters
  const newList = all_product.filter((item) => {
    const matchSub = sub === 'ALL' || (item.subCategory && item.subCategory.toUpperCase() === sub)
    const matchCat = props.category === item.category
    const matchAvailability = availability === "ALL" || item.availability === availability;
    const matchSize = size.length === 0 || (item.sizes && item.sizes.some((s)=>size.includes(s)));

    const numTo = Number(priceTo);
    const numFrom = Number(priceFrom);
    const numPrice = Number(item.price);
    const matchPrice = !isNaN(numPrice) && numPrice >= numFrom && numPrice <= numTo;

    return matchCat && matchSub && matchAvailability && matchPrice && matchSize;
  });

  const highestPrice = all_product
    .filter((item) => item.category === props.category && (sub === "ALL" || item.subCategory?.toUpperCase() === sub)
    ).reduce((acc, res) => (acc > res.price ? acc : res.price), 0); //acc=0

  const totalProducts = newList.length;

  return (
    <>
      <div className="filter-container">
        <div className="options">
          {subCategoryList.map((item, index) => (
            <button
              key={index}
              value={item}
              onClick={(e) => (setSub(e.target.value))}
              className={`opt ${item === sub ? "press" : ''}`}>{item}</button>
          ))}
        </div>
        <div className="filters">
          <h1 className="filterButton">Filters:</h1>

          {/* availability filter */}
          <div className="filterWrapper">
            <button className={`filterButton ${showAvailability ? "active" : ""}`}
              onClick={() => (setShowAvailability(!showAvailability))}>Availability<ChevronDown size={18} />
            </button>
            <div className={`availability ${showAvailability ? 'show-availability' : ''}`}>
              <label ><input type="radio" name="availability" value="ALL" onClick={(e) => { setAvailability(e.target.value) }} /> Show all</label>
              <label ><input type="radio" name="availability" value="In Stock" onClick={(e) => { setAvailability(e.target.value) }} /> In stock</label>
              <label ><input type="radio" name="availability" value="Out of Stock" onClick={(e) => { setAvailability(e.target.value) }} /> Out of stock</label>
            </div>
          </div>

          {/* price filter */}
          <div className="filterWrapper">
            <button className={`filterButton ${showPrice ? "active" : ""}`}
              onClick={() => (setShowPrice(!showPrice))}>Price<ChevronDown size={18} /></button>
            <div className={`availability price ${showPrice ? 'show-availability' : ''}`}>
              <h1>The highest price is ₹ {highestPrice}</h1>
              <hr className="priceHr" />
              <div className="inputPrice">
                <p>₹<input type="number" placeholder="From" onChange={(e) => { setPriceFrom(e.target.value) }} className="priceLabel" /></p>
                <p>₹<input type="number" placeholder="To" onChange={(e) => { setPriceTo(e.target.value) }} className="priceLabel" /></p>
              </div>
            </div>
          </div>

          {/* size filter */}
          <div className="filterWrapper">
            <button className={`filterButton ${showSize ? "active" : ""}`}
              onClick={() => (setShowSize(!showSize))}>Size<ChevronDown size={18} /></button>
            <div className={`availability size ${showSize ? 'show-availability' : ''}`}>
              <h1>{size.length} selected</h1>
              <hr className="sizeHr" />
              <div className="inputSize">
                {sizeList.map((item,index)=>(<p key={index}><input type="checkbox" value={item} 
                onChange={(e) => { setSize((prev) => e.target.checked?[...prev, e.target.value]: prev.filter(item=>item!==e.target.value)) }}  />{item}</p>))}
              </div>
            </div>
          </div>

          <h1 className="totalProducts">{totalProducts} products</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {newList.map((product) => {
          if (product.category === props.category) {
            return <Product key={product.id} name={product.name} image={product.image[0]} price={product.price} id={product.id}/>
          }
          else
            return null
        })}
      </div>
    </>

  );
}

export default ShopCategory;
