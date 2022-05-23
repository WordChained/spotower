import React from "react";
import styles from "./AppFooter.module.css";
import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";
export const AppFooter = () => {
  return (
    <div className={styles.container}>
      <FooterTop />
      <FooterBottom />
    </div>
  );
};
