import React, { FC } from "react";

interface InspirationImage {
  alt: string;
  src: string;
}

const INSPIRATION_IMAGES: InspirationImage[] = [
  {
    alt: "Wedding Setup",
    src: "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
  {
    alt: "Bridal Detail",
    src: "https://images.pexels.com/photos/25226151/pexels-photo-25226151.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
  {
    alt: "Event Decor",
    src: "https://images.pexels.com/photos/4691829/pexels-photo-4691829.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
  {
    alt: "Custom Bouquet",
    src: "https://images.pexels.com/photos/4802272/pexels-photo-4802272.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
  {
    alt: "Seasonal Display",
    src: "https://images.pexels.com/photos/35172419/pexels-photo-35172419.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
  {
    alt: "Reception Floral",
    src: "https://images.pexels.com/photos/540522/pexels-photo-540522.jpeg?auto=compress&cs=tinysrgb&w=1500",
  },
];

const InspirationSection: FC = () => {
  return (
    <section id="inspiration-preview" className="inspiration-preview">
      <div className="inspiration-preview__header">
        <h2 className="section-title">Inspiração Floral</h2>
        <p className="inspiration-preview__subtitle">
          Explore nossa galeria de arranjos e designs personalizados.
        </p>
      </div>
      <div className="inspiration-preview__rail">
        {INSPIRATION_IMAGES.map((image, index) => (
          <div key={index} className="inspiration-card">
            <img
              alt={image.alt}
              src={image.src}
              className="inspiration-card__img"
            />
          </div>
        ))}
      </div>
      <div className="inspiration-preview__footer">
        <a href="#featured-products">
          <div className="btn-outline btn">
            <span>Veja nossa galeria de produtos</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default InspirationSection;
