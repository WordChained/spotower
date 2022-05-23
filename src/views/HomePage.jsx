import React, { useEffect, useState } from "react";
import { MainInput } from "../UI/forms/MainInput";
import styles from "./HomePage.module.css";
import { useWindowSize } from "../hooks/useWindowSize";
import { Article } from "../components/articles/Article";
import { Menu } from "../components/menu/Menu";
export const HomePage = () => {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const arr = [1, 2, 3, 4, 5];
  const [elementToJumpTo, setElementToJumpTo] = useState(null);
  const [activeItemId, setActiveItemId] = useState(null);
  const [activeArticle, setActiveArticle] = useState("1");

  useEffect(() => {
    if (windowSize.width < 700) setIsMobile(true);
    else setIsMobile(false);
  }, [windowSize.width]);

  const openItem = (ev) => {
    const elementId = ev.target.id.length
      ? ev.target.id
      : ev.target.parentElement.id;
    if (elementId === activeItemId) {
      setActiveItemId("");
      setActiveArticle("1");
    } else {
      setActiveItemId(elementId);
      setActiveArticle(elementId);
    }
  };
  const jumpToElement = (ev) => {
    const subtitleId = ev.target.id;
    elementToJumpTo.children[+subtitleId].children[0].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return (
    <main className={styles.container}>
      {!isMobile && (
        <section className={styles.title}>
          <h1>10 Best New York car Insurance rates</h1>
          <h4>Find & compare your best rates in 2 minutes.</h4>
          <div className={styles.input}>
            <MainInput />
          </div>
        </section>
      )}
      <Menu
        openItem={openItem}
        activeItemId={activeItemId}
        jumpToElement={jumpToElement}
      />
      <section className={styles.articles}>
        {arr.map((mockArrayItem, idx) => (
          <div key={idx}>
            {activeArticle === `${idx + 1}` && (
              <Article
                number={idx + 1}
                isMobile={isMobile}
                setElement={setElementToJumpTo}
              />
            )}
          </div>
        ))}
      </section>
    </main>
  );
};
