import React from "react";
import styles from "./AppFooter.module.css";
import { footerData } from "../../../assets/data/footerData";
export const FooterBottom = () => {
  return (
    <div className={styles.bottom}>
      {footerData.map((item, idx) => (
        <div key={idx}>
          <h5>{item.title}</h5>
          {item.items.map((subTitle, idx2) => (
            <span key={`${idx}-${idx2}`}>{subTitle}</span>
          ))}
        </div>
      ))}
    </div>
  );
};
