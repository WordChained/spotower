import React from "react";
import styles from "./AppHeader.module.css";
import { MainInput } from "../../../UI/forms/MainInput";
export const AppHeader = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.mainTitle}>Auto Insurance</h4>
      <MainInput />
    </div>
  );
};
