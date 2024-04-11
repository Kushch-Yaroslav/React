import React from "react";
import styles from "./Header.module.css";
import UserMenu from "./UserMenu";
// import ThemeContext from "../../contexts/ThemeContext";
import { withTheme } from "../../HOCs/withTheme";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

function Header(props) {
  const { theme, setTheme } = props;

  const changeTheme = () => {
    const newTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setTheme(newTheme);
  };

  return (
    <div className={styles.header}>
      <div style={{ border: "2px solid red" }}>LogoText</div>
      <button onClick={changeTheme}>Toggle Theme</button>
      <UserMenu />
    </div>
  );
}

const HeaderWithTheme = withTheme(Header);

export default HeaderWithTheme;
