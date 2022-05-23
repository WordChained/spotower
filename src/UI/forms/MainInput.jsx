import React from "react";
import styles from "./MainInput.module.css";
import sendIcon from "../../assets/icons/send.png";

export const MainInput = ({ isBoxShadow = true }) => {
  return (
    <div className={styles.container}>
      <form>
        <input
          style={{ boxShadow: isBoxShadow ? "" : "unset" }}
          type="text"
          placeholder="Enter Zip Code"
        />
        <img src={sendIcon} alt="" />
        <button>Get Your Quotes</button>
      </form>
    </div>
  );
};
