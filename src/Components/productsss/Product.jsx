import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'

function Product(props) {
  return (
    <div className='card'>
        <div className="img-box">
          <Link to={`/product/${props.id}`} target="_self"><img src={props.image} alt={props.name} loading="lazy"/></Link>
        </div>
        <p>{props.name}</p>
        <p>₹{props.price}</p>
    </div>
  )
}

export default Product