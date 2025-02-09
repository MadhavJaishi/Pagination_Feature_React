import React from 'react'
import '../styles/ProductCard.css'
const ProductCard = ({title, desc, image, price}) => {
  return (
    <div className='productCard'>
        <div className='imgComp'>
            <img src={image} alt={title} width={200} height={140}/>
        </div>
        <div className='textComp'>
            <h1>{title}</h1>
            <h2>{desc}</h2>
            <div className='priceTag'><h1>{price}</h1></div>
        </div>
    </div>
  )
}
export default ProductCard