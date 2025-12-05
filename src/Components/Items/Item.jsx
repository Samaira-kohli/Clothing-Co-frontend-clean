import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img src={props.image} alt={props.name} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}/></Link>
        <p>{props.name}</p>
    </div>
  )
}

export default Item

