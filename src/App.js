import { HomePage } from "./views/HomePage";
import { AppHeader } from "./components/shared/app-header/AppHeader";
import { AppFooter } from "./components/shared/app-footer/AppFooter";
import { useWindowSize } from "./hooks/useWindowSize";
import { useEffect, useState } from "react";
import hamburgerIcon from "./assets/icons/menu.png";
import styles from "./App.module.css";
function App() {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (windowSize.width < 700) setIsMobile(true);
    else setIsMobile(false);
  }, [windowSize.width]);
  return (
    <div>
      {isMobile ? (
        <div className={styles.hamburgerContainer}>
          <img src={hamburgerIcon} alt="" />
        </div>
      ) : (
        <AppHeader />
      )}
      <HomePage />
      <AppFooter />
    </div>
  );
}

export default App;
