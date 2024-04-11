import ThemeContext from "../contexts/ThemeContext";
import React from "react";

// export const withTheme = (Component) => {
//   return function (props) {
//     return (
//       <ThemeContext.Consumer>
//         {([theme, setTheme]) => {
//           return <Component theme={theme} setTheme={setTheme} />;
//         }}
//       </ThemeContext.Consumer>
//     );
//   };
// };

export const withTheme = (Component) => {
  return class extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {([theme, setTheme]) => {
            return (
              <Component theme={theme} setTheme={setTheme} {...this.props} />
            );
          }}
        </ThemeContext.Consumer>
      );
    }
  };
};
