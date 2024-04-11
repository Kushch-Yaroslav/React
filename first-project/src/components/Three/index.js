import React, { useCallback, useContext, useEffect, useMemo } from "react";
import Parent from "./Parent";
import styles from "./Tree.module.css";
import cx from "classnames";
import ThemeContext from "../../contexts/ThemeContext";
import CONSTANTS from "../../constants";
import UserContext from "../../contexts/UserContext";

const { THEMES } = CONSTANTS;

function Tree(props) {
  const [user, setUser] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);

  const cn = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lighTheme]: theme === THEMES.LIGHT,
  });

  const changeTheme = useCallback(() => {
    setTheme((theme) => (theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK));
  }, []);

  function computedValue() {
    let sum = 0;
    for (let i = 0; i < 10000000; i++) {
      sum = i ** 15;
    }
    return sum;
  }

  const layoutValue = useMemo(computedValue, []);

  useEffect(() => {
    console.log("ПЕРЕСОЗДАЛАСЬ");
  }, [changeTheme]);

  return (
    <div className={cn}>
      <p>{user.firstName}</p>
      <p>Tree</p>
      <button onClick={changeTheme}>Chang Theme</button>
      <input type="text" value={layoutValue} />
      <Parent />
    </div>
  );
}

export default Tree;
