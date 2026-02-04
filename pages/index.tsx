import React, { FC } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

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
            <h1 className="hero-title">Verdantia Flowers</h1>
            <p className="hero-subtitle">
              Bespoke floral arrangements for life&apos;s most beautiful
              moments. Fresh blooms, hand-picked and ready for same-day pick-up
              or reservation.
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
              <a href="#catalog">
                <div className="btn-outline btn btn-lg">
                  <span>Browse Catalog</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="quick-search">
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
        </section>
        <section id="catalog" className="featured-collections">
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
        </section>
        <section className="reserve-cta">
          <div className="reserve-cta__inner">
            <div className="reserve-cta__header">
              <h2 className="section-title">How to Reserve</h2>
              <p className="section-subtitle">
                Simple steps to secure your favorite blooms.
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
                <h3 className="section-content">1. Browse Catalog</h3>
                <p className="section-content">
                  Find the perfect arrangement from our curated selection.
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
                <h3 className="section-content">2. WhatsApp Us</h3>
                <p className="section-content">
                  Send us a message with the product name and desired date.
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
                <h3 className="section-content">3. Confirm &amp; Pick Up</h3>
                <p className="section-content">
                  We confirm your order and have it ready for same-day pick-up.
                </p>
              </div>
            </div>
            <div className="reserve-cta__footer">
              <a href="https://wa.me/yourlink">
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
                    Start Your Reservation
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
        <section className="featured-products">
          <div className="featured-products__header">
            <h2 className="section-title">Top Items</h2>
            <p className="section-subtitle">
              Our current favorites, available for immediate pre-order.
            </p>
          </div>
          <div className="featured-products__rail">
            <div className="product-card">
              <img
                alt="Eternal Blush"
                src="https://images.pexels.com/photos/1677009/pexels-photo-1677009.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-card__img"
              />
              <div className="product-card__info">
                <h3 className="section-content">Eternal Blush</h3>
                <span className="product-card__price">$$</span>
                <a href="https://wa.me/yourlink?text=I'd like to reserve Eternal Blush">
                  <div className="btn btn-sm btn-primary">
                    <span>Reserve</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                alt="Golden Hour"
                src="https://images.pexels.com/photos/30190403/pexels-photo-30190403.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-card__img"
              />
              <div className="product-card__info">
                <h3 className="section-content">Golden Hour</h3>
                <span className="product-card__price">$$$</span>
                <a href="https://wa.me/yourlink?text=I'd like to reserve Golden Hour">
                  <div className="btn btn-sm btn-primary">
                    <span>Reserve</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                alt="Pastel Dreams"
                src="https://images.pexels.com/photos/15358707/pexels-photo-15358707.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-card__img"
              />
              <div className="product-card__info">
                <h3 className="section-content">Pastel Dreams</h3>
                <span className="product-card__price">$$</span>
                <a href="https://wa.me/yourlink?text=I'd like to reserve Pastel Dreams">
                  <div className="btn btn-sm btn-primary">
                    <span>Reserve</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                alt="White Serenity"
                src="https://images.pexels.com/photos/5706654/pexels-photo-5706654.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-card__img"
              />
              <div className="product-card__info">
                <h3 className="section-content">White Serenity</h3>
                <span className="product-card__price">$$$</span>
                <a href="https://wa.me/yourlink?text=I'd like to reserve White Serenity">
                  <div className="btn btn-sm btn-primary">
                    <span>Reserve</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="product-card">
              <img
                alt="Wild Meadow"
                src="https://images.pexels.com/photos/3184888/pexels-photo-3184888.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-card__img"
              />
              <div className="product-card__info">
                <h3 className="section-content">Wild Meadow</h3>
                <span className="product-card__price">$$</span>
                <a href="https://wa.me/yourlink?text=I'd like to reserve Wild Meadow">
                  <div className="btn btn-sm btn-primary">
                    <span>Reserve</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="inspiration-preview">
          <div className="inspiration-preview__header">
            <h2 className="section-title">Floral Inspiration</h2>
            <p className="section-subtitle">
              Explore our gallery of event setups and custom designs.
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
            <a href="#">
              <div className="btn-outline btn">
                <span>View Full Gallery</span>
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
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container4">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon25"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text24">Built in TeleportHQ</span>
          </div>
        </a>
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
