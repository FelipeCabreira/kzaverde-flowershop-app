import React, { FC, useEffect, useState } from "react";

import Script from "dangerous-html/react";
import styles from "./Navigation.module.scss";

interface NavigationProps {
  brandImageAlt?: string;
}

const Navigation: FC<NavigationProps> = ({ brandImageAlt = "KzaVerde" }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const nav = document.getElementById("main-navigation");

    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        nav.style.padding = "var(--spacing-sm) 0";
        nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.3)";
      } else {
        nav.style.padding = "var(--spacing-md) 0";
        nav.style.boxShadow = "none";
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="navigation-container1">
        <nav id="main-navigation" className={styles["navigation-root"]}>
          <div className={styles["navigation-container"]}>
            <a href="/">
              <div
                aria-label="KzaVerde Homepage"
                className={styles["navigation-logo-link"]}
              >
                <div className={styles["navigation-logo-wrapper"]}>
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="navigation-logo-icon"
                    aria-label={brandImageAlt}
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="3" cx="12" cy="12"></circle>
                      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"></path>
                    </g>
                  </svg>
                  <span className={styles["navigation-brand-name"]}>
                    KzaVerde
                  </span>
                </div>
              </div>
            </a>
            <div className={styles["navigation-desktop-menu"]}>
              <ul className={styles["navigation-links-list"]}>
                <li>
                  <a href="/">
                    <div className={styles["navigation-link"]}>
                      <span>Ínicio</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#featured-products">
                    <div className={styles["navigation-link"]}>
                      <span>Produtos</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#inspiration-preview">
                    <div className={styles["navigation-link"]}>
                      <span>Nossa Loja</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#contact">
                    <div className={styles["navigation-link"]}>
                      <span>Contato</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className={styles["navigation-actions"]}>
                <a
                  href="https://wa.me/c/555183388338"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    className={`btn btn-sm btn-primary ${styles["navigation-whatsapp-btn"]}`}
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className={styles["navigation-btn-icon"]}
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
                    <span>WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
            <button
              id="mobile-menu-open"
              aria-label="Open navigation menu"
              aria-expanded={isMobileOpen}
              className={styles["navigation-mobile-toggle"]}
              onClick={() => setIsMobileOpen(true)}
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
                <path d="M4 8h16M4 16h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div
          id="mobile-overlay"
          className={`${styles["navigation-mobile-overlay"]} ${
            isMobileOpen ? styles["navigation-mobile-overlay--active"] : ""
          }`}
        >
          <div className={styles["navigation-overlay-header"]}>
            <a href="/">
              <div className={styles["navigation-logo-link"]}>
                <div className={styles["navigation-logo-wrapper"]}>
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="navigation-logo-icon"
                    aria-label={brandImageAlt}
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="3" cx="12" cy="12"></circle>
                      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"></path>
                    </g>
                  </svg>
                  <span className={styles["navigation-brand-name"]}>
                    KzaVerde
                  </span>
                </div>
              </div>
            </a>
            <button
              id="mobile-menu-close"
              aria-label="Close navigation menu"
              className={styles["navigation-mobile-close"]}
              onClick={() => setIsMobileOpen(false)}
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
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className={styles["navigation-overlay-content"]}>
            <ul className={styles["navigation-overlay-links"]}>
              <li className={styles["navigation-stagger-item"]}>
                <a href="/">
                  <div
                    className={styles["navigation-overlay-link"]}
                    data-nav-overlay-link
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span>Ínicio</span>
                  </div>
                </a>
              </li>
              <li className={styles["navigation-stagger-item"]}>
                <a href="/#featured-products">
                  <div
                    className={styles["navigation-overlay-link"]}
                    data-nav-overlay-link
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span>Produtos</span>
                  </div>
                </a>
              </li>
              <li className={styles["navigation-stagger-item"]}>
                <a href="/#inspiration-preview">
                  <div
                    className={styles["navigation-overlay-link"]}
                    data-nav-overlay-link
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span>Nossa Loja</span>
                  </div>
                </a>
              </li>
              <li className={styles["navigation-stagger-item"]}>
                <a href="/#contact">
                  <div
                    className={styles["navigation-overlay-link"]}
                    data-nav-overlay-link
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span>Contato</span>
                  </div>
                </a>
              </li>
            </ul>
            <div
              className={`${styles["navigation-overlay-footer"]} ${styles["navigation-stagger-item"]}`}
            >
              <p className="section-content">Reserve your bouquet today</p>
              <a
                href="https://wa.me/c/555183388338"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className={`btn btn-lg btn-primary ${styles["navigation-whatsapp-btn-mobile"]}`}
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="navigation-btn-icon"
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
                  <span>WhatsApp Pre-order</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-root, .navigation-mobile-overlay, .navigation-stagger-item, .navigation-link::after {
  transition: none;
}
.navigation-mobile-overlay.is-active .navigation-stagger-item {
  opacity: 1;
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5"></div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
