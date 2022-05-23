import React, { useEffect, useState } from "react";
import styles from "./AppFooter.module.css";
import sendIcon from "../../../assets/icons/send.png";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { MainInput } from "../../../UI/forms/MainInput";
export const FooterTop = () => {
  const [isMobile, setIsMobile] = useState(false);
  const windowSize = useWindowSize();
  useEffect(() => {
    if (windowSize.width < 800) setIsMobile(true);
    else setIsMobile(false);
  }, [windowSize.width]);
  return (
    <div className={styles.top}>
      <h3>10 Best New York car insurance</h3>
      <h5>Find & compare your best</h5>
      {isMobile && (
        <>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter zip code"
            />
            <img src={sendIcon} alt="" />
          </div>
          <button className={styles.btn}>Get Your Quotes</button>
        </>
      )}
      {!isMobile && (
        <>
          <MainInput isBoxShadow={false} />
        </>
      )}
    </div>
  );
};
