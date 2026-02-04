import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '../../components/navigation'
import Footer from '../../components/footer'
import catalogData from '../../data/catalog.json'

interface Product {
  id: number
  name: string
  price: string
  displayPrice?: string
  description: string
  image: string
  images?: string[]
  category: string
  rating?: number
  reviews?: number
  careInstructions?: string[]
}

const ProductDetail: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const product = catalogData.catalog.find((p) => p.id === parseInt(id as string)) as Product | undefined

  const [size, setSize] = useState<string>('Small')
  const [type, setType] = useState<string>('Bouquet')
  const [quantity, setQuantity] = useState<number>(1)
  const [wishlist, setWishlist] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>('')

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image)
    }
  }, [product])

  if (!product) {
    return <div>Product not found</div>
  }

  // Get similar products from the same category
  const similarProducts = catalogData.catalog
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4) as Product[]

  const generateWhatsAppMessage = () => {
    const message = encodeURIComponent(
      `Hi! I'd like to reserve the following product:\n\n` +
        `Product: ${product.name}\n` +
        `Size: ${size}\n` +
        `Type: ${type}\n` +
        `Quantity: ${quantity}\n` +
        `Price: ${product.price}\n\n` +
        `Please confirm availability and provide further details.`
    )
    return `https://wa.me/c/555183388338?text=${message}`
  }

  const handleAddToWishlist = () => {
    setWishlist(!wishlist)
    // In a real app, this would save to localStorage or a backend
    if (!wishlist) {
      const currentWishlist = JSON.parse(localStorage.getItem('kzaverde-wishlist') || '[]')
      localStorage.setItem('kzaverde-wishlist', JSON.stringify([...currentWishlist, product.id]))
    } else {
      const currentWishlist = JSON.parse(localStorage.getItem('kzaverde-wishlist') || '[]')
      localStorage.setItem(
        'kzaverde-wishlist',
        JSON.stringify(currentWishlist.filter((id: number) => id !== product.id))
      )
    }
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity > 0) {
      setQuantity(newQuantity)
    }
  }

  return (
    <>
      <div className="product-container">
        <Head>
          <title>{product.name} - KzaVerde</title>
          <meta property="og:title" content={`${product.name} - KzaVerde`} />
          <meta property="og:description" content={product.description} />
        </Head>
        <Navigation></Navigation>

        <section className="product-detail">
          <div className="product-detail__inner">
            <div className="product-detail__gallery">
              <div className="product-detail__main-image">
                <img src={selectedImage} alt={product.name} />
              </div>
              <div className="product-detail__thumbnails">
                {(product.images || [product.image]).map((img, index) => (
                  <button
                    key={index}
                    className={`product-detail__thumbnail ${selectedImage === img ? 'active' : ''}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-detail__info">
              <div className="product-detail__header">
                <h1 className="product-detail__title">{product.name}</h1>
                <div className="product-detail__rating">
                  <span className="product-detail__stars">★★★★☆</span>
                  <span className="product-detail__reviews">
                    {product.rating || 4.0} ({product.reviews || 127} reviews)
                  </span>
                </div>
              </div>

              <div className="product-detail__price-section">
                <span className="product-detail__price">{product.price}</span>
              </div>

              <p className="product-detail__description">{product.description}</p>

              <div className="product-detail__care">
                <h3 className="product-detail__care-title">Care Instructions</h3>
                <ul className="product-detail__care-list">
                  <li>Change water every 2-3 days for freshness</li>
                  <li>Trim stems at a 45-degree angle before placing in water</li>
                  <li>Keep away from direct sunlight and heat sources</li>
                  <li>Remove any wilted petals to extend bouquet life</li>
                </ul>
              </div>

              <div className="product-detail__options">
                <div className="product-detail__option-group">
                  <label className="product-detail__option-label">Size</label>
                  <div className="product-detail__option-buttons">
                    {['Small', 'Medium', 'Large'].map((s) => (
                      <button
                        key={s}
                        className={`product-detail__option-btn ${size === s ? 'active' : ''}`}
                        onClick={() => setSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="product-detail__option-group">
                  <label className="product-detail__option-label">Type</label>
                  <div className="product-detail__option-buttons">
                    {['Bouquet', 'Arrangement', 'Vase'].map((t) => (
                      <button
                        key={t}
                        className={`product-detail__option-btn ${type === t ? 'active' : ''}`}
                        onClick={() => setType(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="product-detail__option-group">
                  <label className="product-detail__option-label">Quantity</label>
                  <div className="product-detail__quantity">
                    <button
                      className="product-detail__quantity-btn"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      className="product-detail__quantity-input"
                      value={quantity}
                      readOnly
                    />
                    <button
                      className="product-detail__quantity-btn"
                      onClick={() => handleQuantityChange(1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-detail__actions">
                <a href={generateWhatsAppMessage()}>
                  <button className="btn btn-lg btn-primary">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M18.497 4.409a10 10 0 0 1-10.36 16.828l-.223-.098l-4.759.849l-.11.011a1 1 0 0 1-.11 0l-.102-.013l-.108-.024l-.105-.037l-.099-.047l-.093-.058l-.014-.011l-.012-.007l-.086-.073l-.077-.08l-.067-.088l-.056-.094l-.034-.07l-.04-.108l-.028-.128l-.012-.102a1 1 0 0 1 0-.125l.012-.1l.024-.11l.045-.122l1.433-3.304l-.009-.014A10 10 0 0 1 5.056 4.83l.215-.203a10 10 0 0 1 13.226-.217M9.5 7.5A1.5 1.5 0 0 0 8 9v1a6 6 0 0 0 6 6h1a1.5 1.5 0 0 0 0-3h-1l-.144.007a1.5 1.5 0 0 0-1.128.697l-.042.074l-.022-.007a4.01 4.01 0 0 1-2.435-2.435l-.008-.023l.075-.041A1.5 1.5 0 0 0 11 10V9a1.5 1.5 0 0 0-1.5-1.5"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <span>Reserve via WhatsApp</span>
                  </button>
                </a>
                <button
                  className={`btn btn-lg btn-outline ${wishlist ? 'wishlist-active' : ''}`}
                  onClick={handleAddToWishlist}
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={wishlist ? 'currentColor' : 'none'}
                    stroke="currentColor"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                  <span>{wishlist ? 'Remove from' : 'Add to'} Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="similar-products">
          <div className="similar-products__inner">
            <h2 className="similar-products__title">You May Also Like</h2>
            <div className="similar-products__grid">
              {similarProducts.map((similarProduct) => (
                <div key={similarProduct.id} className="similar-product-card">
                  <a href={`/product/${similarProduct.id}`} className="similar-product-card__link">
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="similar-product-card__img"
                    />
                  </a>
                  <div className="similar-product-card__content">
                    <h3 className="similar-product-card__name">{similarProduct.name}</h3>
                    <p className="similar-product-card__price">{similarProduct.price}</p>
                    <a href={`/product/${similarProduct.id}`}>
                      <button className="btn btn-sm btn-primary">View Details</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer></Footer>
      </div>

      <style jsx>
        {`
          .product-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }

          .product-detail {
            padding: 60px 20px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .product-detail__inner {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }

          .product-detail__gallery {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          .product-detail__main-image {
            width: 100%;
            border-radius: 12px;
            overflow: hidden;
            background: #f5f5f5;
          }

          .product-detail__main-image img {
            width: 100%;
            height: auto;
            display: block;
            object-fit: cover;
          }

          .product-detail__thumbnails {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }

          .product-detail__thumbnail {
            border: 2px solid transparent;
            border-radius: 8px;
            overflow: hidden;
            cursor: pointer;
            transition: border-color 0.3s ease;
            background: none;
            padding: 0;
          }

          .product-detail__thumbnail:hover {
            border-color: rgba(217, 70, 239, 0.5);
          }

          .product-detail__thumbnail.active {
            border-color: #d946ef;
          }

          .product-detail__thumbnail img {
            width: 100%;
            height: auto;
            display: block;
          }

          .product-detail__info {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }

          .product-detail__header {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .product-detail__title {
            font-size: 32px;
            font-weight: 600;
            color: #ffffff;
            margin: 0;
          }

          .product-detail__rating {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            color: #999;
          }

          .product-detail__stars {
            color: #d946ef;
            font-size: 16px;
          }

          .product-detail__price-section {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .product-detail__price {
            font-size: 36px;
            font-weight: 600;
            color: #d946ef;
          }

          .product-detail__description {
            font-size: 15px;
            line-height: 1.6;
            color: #ccc;
            margin: 0;
          }

          .product-detail__care {
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .product-detail__care-title {
            font-size: 16px;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 15px 0;
          }

          .product-detail__care-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .product-detail__care-list li {
            font-size: 14px;
            color: #ccc;
            padding-left: 20px;
            position: relative;
          }

          .product-detail__care-list li:before {
            content: '◆';
            position: absolute;
            left: 0;
            color: #d946ef;
          }

          .product-detail__options {
            display: flex;
            flex-direction: column;
            gap: 25px;
          }

          .product-detail__option-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .product-detail__option-label {
            font-size: 14px;
            font-weight: 600;
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .product-detail__option-buttons {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }

          .product-detail__option-btn {
            padding: 12px 20px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            background: transparent;
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .product-detail__option-btn:hover {
            border-color: #d946ef;
            color: #d946ef;
          }

          .product-detail__option-btn.active {
            background: #d946ef;
            border-color: #d946ef;
            color: #ffffff;
          }

          .product-detail__quantity {
            display: flex;
            align-items: center;
            gap: 12px;
            width: fit-content;
          }

          .product-detail__quantity-btn {
            width: 36px;
            height: 36px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            background: transparent;
            color: #ffffff;
            font-size: 16px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .product-detail__quantity-btn:hover {
            border-color: #d946ef;
            color: #d946ef;
          }

          .product-detail__quantity-input {
            width: 50px;
            height: 36px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            background: transparent;
            color: #ffffff;
            font-size: 14px;
            text-align: center;
            font-weight: 500;
          }

          .product-detail__actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
          }

          .product-detail__actions a {
            text-decoration: none;
          }

          .product-detail__actions button {
            width: 100%;
          }

          .wishlist-active {
            background: #d946ef;
            border-color: #d946ef;
            color: #ffffff;
          }

          .similar-products {
            padding: 60px 20px;
            background: linear-gradient(135deg, rgba(217, 70, 239, 0.05) 0%, rgba(45, 212, 191, 0.05) 100%);
            margin-top: 40px;
          }

          .similar-products__inner {
            max-width: 1200px;
            margin: 0 auto;
          }

          .similar-products__title {
            font-size: 32px;
            font-weight: 600;
            color: #ffffff;
            margin: 0 0 40px 0;
            text-align: center;
          }

          .similar-products__grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 30px;
          }

          .similar-product-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          .similar-product-card:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: #d946ef;
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(217, 70, 239, 0.2);
          }

          .similar-product-card__link {
            display: block;
            text-decoration: none;
            width: 100%;
            height: 240px;
            overflow: hidden;
            background: #1a1a1a;
          }

          .similar-product-card__img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
          }

          .similar-product-card:hover .similar-product-card__img {
            transform: scale(1.05);
          }

          .similar-product-card__content {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }

          .similar-product-card__name {
            font-size: 16px;
            font-weight: 600;
            color: #ffffff;
            margin: 0;
            line-height: 1.4;
          }

          .similar-product-card__price {
            font-size: 18px;
            font-weight: 600;
            color: #d946ef;
            margin: 0;
          }

          .similar-product-card a {
            text-decoration: none;
          }

          @media (max-width: 768px) {
            .product-detail__inner {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .product-detail__option-buttons {
              grid-template-columns: repeat(2, 1fr);
            }

            .product-detail__actions {
              grid-template-columns: 1fr;
            }

            .similar-products__grid {
              grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
              gap: 20px;
            }

            .similar-products {
              padding: 40px 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default ProductDetail
