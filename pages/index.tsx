import React, { FC } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import ProductCard from '../components/product-card'
import productsData from '../data/products.json'

const Home: FC = () => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>KzaVerde</title>
          <meta property="og:title" content="KzaVerde" />
          <link
            rel="canonical"
            href="https://worthwhile-bewitched-tapir-xn2j0r.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-welcome">
          <video
            src="https://videos.pexels.com/video-files/4191603/4191603-hd_1920_1080_30fps.mp4"
            loop={true}
            muted={true}
            poster="https://images.pexels.com/videos/4191603/pictures/preview-0.jpg"
            autoPlay={true}
            playsInline={true}
            className="hero-welcome__video"
          ></video>
          <div className="hero-welcome__overlay"></div>
          <div className="hero-welcome__content">
            <h1 className="hero-title">KzaVerde</h1>
            <p className="hero-subtitle">
              {/* Na KzaVerde floricultura Sergio & Marta voltam com o coração em flor 
              com miniaturas que contam histórias e antiguidades que guardam memórias.
    <br />
    <br /> */}
              Cada detalhe e um gesto de carinho. <br /> Cada flor, uma promessa de beleza.
            </p>
            <div className="hero-welcome__actions">
              <a href="https://wa.me/c/555183388338">
                <div className="btn btn-lg btn-primary">
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
                  <span>
                    {' '}
                    Reserve via WhatsApp
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
              <a href="#featured-products">
                <div className="btn-outline btn btn-lg">
                  <span>Produtos</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* Search by produtos section or promotions */}
        {/* <section className="quick-search">
          <div className="quick-search__card">
            <div className="quick-search__header">
              <h2 className="section-title">Find Your Perfect Bloom</h2>
              <p className="section-subtitle">
                Search our catalog by flower type, occasion, or season.
              </p>
            </div>
            <form
              action="/search"
              method="GET"
              data-form-id="d0e7c161-6b09-4b2c-a07e-066797480b29"
              className="quick-search__form"
            >
              <div className="quick-search__input-wrapper">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="quick-search__icon"
                >
                  <circle r="8" cx="11" cy="11"></circle>
                  <path d="m21 21l-4.3-4.3"></path>
                </svg>
                <input
                  type="text"
                  id="thq_textinput_KkYe"
                  name="textinput"
                  required={true}
                  placeholder="Search for roses, lilies, bouquets..."
                  data-form-field-id="thq_textinput_KkYe"
                  className="quick-search__input"
                />
                <button
                  id="thq_button_VdI3"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_VdI3"
                  className="btn btn-sm btn-primary"
                >
                  Search
                </button>
              </div>
              <div className="quick-search__filters">
                <div className="quick-search__chips">
                  <button
                    id="thq_button_D_kc"
                    name="button"
                    type="button"
                    data-form-field-id="thq_button_D_kc"
                    className="active quick-search__chip"
                  >
                    All
                  </button>
                  <button
                    id="thq_button_HHZv"
                    name="button"
                    type="button"
                    data-form-field-id="thq_button_HHZv"
                    className="quick-search__chip"
                  >
                    Roses
                  </button>
                  <button
                    id="thq_button_hOOs"
                    name="button"
                    type="button"
                    data-form-field-id="thq_button_hOOs"
                    className="quick-search__chip"
                  >
                    Bouquets
                  </button>
                  <button
                    id="thq_button_s1nt"
                    name="button"
                    type="button"
                    data-form-field-id="thq_button_s1nt"
                    className="quick-search__chip"
                  >
                    Seasonal
                  </button>
                  <button
                    id="thq_button_trT4"
                    name="button"
                    type="button"
                    data-form-field-id="thq_button_trT4"
                    className="quick-search__chip"
                  >
                    Occasions
                  </button>
                </div>
                <button
                  id="thq_button_a5Ja"
                  name="button"
                  type="button"
                  data-form-field-id="thq_button_a5Ja"
                  className="quick-search__filter-btn"
                >
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16v2.172a2 2 0 0 1-.586 1.414L15 12v7l-6 2v-8.5L4.52 7.572A2 2 0 0 1 4 6.227z"></path>
                  </svg>
                  <span>
                    {' '}
                    Filters
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section> */}
        {/* Produtos e promotions section  */}
        {/* <section id="catalog" className="featured-collections">
          <div className="featured-collections__inner">
            <div className="featured-collections__header">
              <h2 className="section-title">Curated Collections</h2>
              <p className="section-subtitle">
                Hand-picked arrangements for every mood and milestone.
              </p>
            </div>
            <div className="featured-collections__grid">
              <div className="featured-collections__item">
                <img
                  alt="Best Sellers"
                  src="https://images.pexels.com/photos/11166470/pexels-photo-11166470.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-collections__img"
                />
                <div className="featured-collections__content">
                  <h3 className="section-title">Best Sellers</h3>
                  <p className="section-content">
                    Our most loved signature arrangements.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Collection</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="featured-collections__item">
                <img
                  alt="Seasonal Picks"
                  src="https://images.pexels.com/photos/31043510/pexels-photo-31043510.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-collections__img"
                />
                <div className="featured-collections__content">
                  <h3 className="section-title">Seasonal Picks</h3>
                  <p className="section-content">
                    Fresh blooms inspired by the current season.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Collection</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="featured-collections__item">
                <img
                  alt="Wedding"
                  src="https://images.pexels.com/photos/289519/pexels-photo-289519.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-collections__img"
                />
                <div className="featured-collections__content">
                  <h3 className="section-title">Wedding</h3>
                  <p className="section-content">
                    Elegant designs for your special day.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Collection</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="featured-collections__item">
                <img
                  alt="Sympathy"
                  src="https://images.pexels.com/photos/30159391/pexels-photo-30159391.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-collections__img"
                />
                <div className="featured-collections__content">
                  <h3 className="section-title">Sympathy</h3>
                  <p className="section-content">
                    Graceful tributes to honor loved ones.
                  </p>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>View Collection</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section> */}
          <section id="featured-products" className="featured-products flex flex-column align-center">
          <div className="featured-products__header">
            <h2 className="section-title">Mais vendidos</h2>
            <p className="section-subtitle">
              Nossos favoritos atuais, disponíveis para pré-encomenda imediata.
            </p>
          </div>
          <div className="featured-products__rail">
            {productsData.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                alt={product.alt}
              />
            ))}
          </div>
        </section>
        <section className="reserve-cta">
          <div className="reserve-cta__inner">
            <div className="reserve-cta__header">
              <h2 className="section-title">Como reservar</h2>
              <p className="section-subtitle">
               Etapas simples para garantir suas flores favoritas.
              </p>
            </div>
            <div className="reserve-cta__steps">
              <div className="reserve-cta__step">
                <div className="reserve-cta__icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="8" cx="11" cy="11"></circle>
                    <path d="m21 21l-4.3-4.3"></path>
                  </svg>
                </div>
                <h3 className="section-content">1. Escolha seu produto no nosso catálogo</h3>
                <p className="section-content">
                  Encontre o arranjo perfeito na nossa seleção curada.
                </p>
              </div>
              <div className="reserve-cta__step">
                <div className="reserve-cta__icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                </div>
                <h3 className="section-content">2. WhatsApp</h3>
                <p className="section-content">
                  Envie-nos uma mensagem com o nome do produto e a data desejada.

                </p>
              </div>
              <div className="reserve-cta__step">
                <div className="reserve-cta__icon-box">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="section-content">3. Confirmação e Retirada</h3>
                <p className="section-content">
                  Confirmamos seu pedido e deixamos pronto para retirada no mesmo dia.
                </p>
              </div>
            </div>
            <div className="reserve-cta__footer">
              <a href="https://wa.me/c/555183388338">
                <div className="btn btn-accent btn-xl">
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
                  <span>
                    {' '}
                    Fale conosco via WhatsApp
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id='inspiration-preview' className="inspiration-preview">
          <div className="inspiration-preview__header">
            <h2 className="section-title">Inspiração Floral</h2>
            <p className="section-subtitle">
              Explore nossa galeria de arranjos e designs personalizados.
            </p>
          </div>
          <div className="inspiration-preview__rail">
            <div className="inspiration-card">
              <img
                alt="Wedding Setup"
                src="https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="inspiration-card__img"
              />
            </div>
            <div className="inspiration-card">
              <img
                alt="Bridal Detail"
                src="https://images.pexels.com/photos/25226151/pexels-photo-25226151.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="inspiration-card__img"
              />
            </div>
            <div className="inspiration-card">
              <img
                alt="Event Decor"
                src="https://images.pexels.com/photos/4691829/pexels-photo-4691829.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="inspiration-card__img"
              />
            </div>
            <div className="inspiration-card">
              <img
                alt="Custom Bouquet"
                src="https://images.pexels.com/photos/4802272/pexels-photo-4802272.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="inspiration-card__img"
              />
            </div>
            <div className="inspiration-card">
              <img
                alt="Seasonal Display"
                src="https://images.pexels.com/photos/35172419/pexels-photo-35172419.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="inspiration-card__img"
              />
            </div>
            <div className="inspiration-card">
              <img
                alt="Reception Floral"
                src="https://images.pexels.com/photos/540522/pexels-photo-540522.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="inspiration-card__img"
              />
            </div>
          </div>
          <div className="inspiration-preview__footer">
            <a href="#featured-products">
              <div className="btn-outline btn">
                <span>Veja nossa galeria de produtos</span>
              </div>
            </a>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<script defer data-name="verdantia-logic">
(function(){
  // Chip interaction for search
  const chips = document.querySelectorAll(".quick-search__chip")
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"))
      chip.classList.add("active")
    })
  })

  // Simple intersection observer for reveal effects
  const revealElements = document.querySelectorAll(".featured-collections__item, .reserve-cta__step, .product-card")

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 }
  )

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })

  // Horizontal scroll behavior for rails (mouse wheel support)
  const rails = document.querySelectorAll(".featured-products__rail, .inspiration-preview__rail")
  rails.forEach((rail) => {
    rail.addEventListener("wheel", (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        rail.scrollLeft += e.deltaY
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon25 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text24 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
