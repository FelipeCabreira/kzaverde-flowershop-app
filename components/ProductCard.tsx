import React, { FC } from 'react'

interface ProductCardProps {
  id: number
  name: string
  price: string
  image: string
  alt: string
}

const ProductCard: FC<ProductCardProps> = ({ id, name, price, image, alt }) => {
  return (
    <div className="product-card">
      <a href={`/product/${id}`} className="product-card__link">
        <img
          alt={alt}
          src={image}
          className="product-card__img"
        />
      </a>
      <div className="product-card__info">
        <h3 className="section-content">{name}</h3>
        <span className="product-card__price">{price}</span>
        <a href={`/product/${id}`}>
          <div className="btn btn-sm btn-primary">
            <span>Veja detalhes</span>
          </div>
        </a>
      </div>
    </div>
  )
}

export default ProductCard
