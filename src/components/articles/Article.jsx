import React, { useEffect, useRef } from "react";
import styles from "./Article.module.css";
import {
  articleArray,
  articleArray2,
  articleArray3,
  articleArray4,
  articleArray5,
} from "../../assets/data/articlesData";
import arrow from "../../assets/icons/down.png";
export const Article = ({ number, setElement, isMobile }) => {
  let articleToRender;
  const titlesRef = useRef();
  switch (number) {
    case 1:
      articleToRender = articleArray;
      break;
    case 2:
      articleToRender = articleArray2;
      break;
    case 3:
      articleToRender = articleArray3;
      break;
    case 4:
      articleToRender = articleArray4;
      break;
    case 5:
      articleToRender = articleArray5;
      break;
    default:
      articleToRender = articleArray;
      break;
  }
  useEffect(() => {
    if (!titlesRef.current) return;
    setElement(titlesRef.current);
  }, [titlesRef.current]);

  return (
    <div ref={titlesRef} className={styles.container}>
      {articleToRender.map((item, idx) => (
        <div key={idx}>
          <h3 id={`title-${idx}`}>{item.title}</h3>
          <p>{item.content}</p>
          {isMobile && (
            <span className={styles.readMore}>
              Read More <img src={arrow} alt="" />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
