import React from "react";
import styles from "../../views/HomePage.module.css";
import downArrow from "../../assets/icons/down.png";
import { menuData } from "../../assets/data/menuData";
export const Menu = ({ openItem, activeItemId, jumpToElement }) => {
  return (
    <section className={styles.nav}>
      <div className={styles.menu}>
        {menuData.map((item, idx) => (
          <div key={idx}>
            <div
              onClick={openItem}
              id={idx + 1}
              className={`${styles.item} ${
                activeItemId === `${idx + 1}` ? styles.active : ""
              }`}
            >
              <span>{item.title}</span>
              <img src={downArrow} alt="" />
            </div>
            <div
              className={`${styles.subTitle} ${
                activeItemId === `${idx + 1}` ? styles.open : ""
              }`}
            >
              {item.subtitles.map((sub, idx2) => (
                <span key={`${idx}-${idx2}`} id={idx2} onClick={jumpToElement}>
                  {sub}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
