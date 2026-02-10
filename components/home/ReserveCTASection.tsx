import React, { FC } from "react";

interface ReserveStep {
  icon: string;
  title: string;
  description: string;
}

const RESERVE_STEPS: ReserveStep[] = [
  {
    icon: "circle-search",
    title: "1. Escolha seu produto no nosso catálogo",
    description: "Encontre o arranjo perfeito na nossa seleção curada.",
  },
  {
    icon: "message-circle",
    title: "2. WhatsApp",
    description:
      "Envie-nos uma mensagem com o nome do produto e a data desejada.",
  },
  {
    icon: "check",
    title: "3. Confirmação e Retirada",
    description:
      "Confirmamos seu pedido e deixamos pronto para retirada no mesmo dia.",
  },
];

const ReserveCTASection: FC = () => {
  return (
    <section className="reserve-cta">
      <div className="reserve-cta__inner">
        <div className="reserve-cta__header">
          <h2 className="section-title">Como reservar</h2>
          <p className="section-subtitle">
            Etapas simples para garantir suas flores favoritas.
          </p>
        </div>
        <div className="reserve-cta__steps">
          {RESERVE_STEPS.map((step, index) => (
            <div key={index} className="reserve-cta__step">
              <div className="reserve-cta__icon-box">
                {step.icon === "circle-search" && (
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
                )}
                {step.icon === "message-circle" && (
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
                )}
                {step.icon === "check" && (
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
                )}
              </div>
              <h3 className="section-content">{step.title}</h3>
              <p className="section-content">{step.description}</p>
            </div>
          ))}
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
                {" "}
                Fale conosco via WhatsApp
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReserveCTASection;
