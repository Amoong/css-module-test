import styles from "./App.module.scss";

import InnerPage from "./InnerPage";

function App() {
  const toggleTheme = () => {
    const rootElem = document.documentElement;
    if (rootElem.dataset.theme === "light") {
      rootElem.dataset.theme = "dark";
    } else {
      rootElem.dataset.theme = "light";
    }
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.title}>css-module</h1>
      <button size="small" onClick={toggleTheme}>
        change theme
      </button>
      <InnerPage />
    </div>
  );
}

export default App;
