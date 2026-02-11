import React, { FC } from "react";
import styles from "./ProductDisclaimer.module.scss";

const DISCLAIMER_TEXT =
  "Imagens meramente ilustrativas. Detalhes, especificações e disponibilidade dos produtos estão sujeitos a alterações conforme estoque da loja, converse com nossos atendentes";

export const ProductDisclaimer: FC = () => {
  return (
    <div className={styles.disclaimer} role="note" aria-live="polite">
      <p className={styles.text}>{DISCLAIMER_TEXT}</p>
    </div>
  );
};

export default ProductDisclaimer;
