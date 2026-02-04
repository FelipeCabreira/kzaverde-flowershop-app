import React, { FC } from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer: FC = () => {
  return (
    <>
      <div className="footer-container1">
        <footer id="contact" className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column footer-brand-column">
                <div className="footer-logo-group">
                  <div className="footer-logo-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path>
                        <circle r="2" cx="12" cy="8"></circle>
                        <path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path>
                      </g>
                    </svg>
                  </div>
                  <span className="footer-brand-name">Verdantia</span>
                </div>
                <p className="section-content footer-description">
                  Bringing nature&apos;s finest blooms to your doorstep.
                  Hand-crafted arrangements for every emotion, grown with love
                  and delivered with care.
                </p>
                <div className="footer-social-links">
                  <a href="#">
                    <div aria-label="Facebook" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Instagram" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                            width="20"
                            height="20"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="WhatsApp" className="footer-social-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h2 className="section-subtitle footer-column-title">
                  Quick Links
                </h2>
                <nav className="footer-nav">
                  <ul className="footer-link-list">
                    <li>
                      <a href="Homepage">
                        <div className="footer-link">
                          <span>Home Gallery</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Special Collections</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Pre-order Catalog</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Store Locations</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-link">
                          <span>Sustainability</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column">
                <h2 className="section-subtitle footer-column-title">
                  Visit Our Store
                </h2>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle r="3" cx="12" cy="10"></circle>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      123 Floral Avenue, Botanical District, NY 10001
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      +1 (555) 123-4567
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon">
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                          <rect
                            x="2"
                            y="4"
                            rx="2"
                            width="20"
                            height="16"
                          ></rect>
                        </g>
                      </svg>
                    </div>
                    <span className="footer-contact-text">
                      hello@verdantiaflowers.com
                    </span>
                  </div>
                </div>
                <div className="footer-cta-wrapper">
                  <a href="https://wa.me/15551234567">
                    <div className="btn footer-whatsapp-btn btn-primary">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                        </g>
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
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="footer-copyright">
                  &amp;copy; 2026 Verdantia Flowers. All rights reserved.
                </p>
                <div className="footer-bottom-links">
                  <a href="#">
                    <div className="footer-bottom-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-bottom-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  const footerIcons = document.querySelectorAll(".footer-social-icon")

  footerIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", () => {
      icon.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
    })

    icon.addEventListener("mouseleave", () => {
      icon.style.transition = "all 0.3s ease"
    })
  })

  const footerLinks = document.querySelectorAll(".footer-link")

  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.paddingLeft = "5px"
    })

    link.addEventListener("mouseleave", () => {
      link.style.paddingLeft = "0"
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
