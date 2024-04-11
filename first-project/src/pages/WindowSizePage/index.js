import React from "react";
import WindowVP from "../../components/WindowResizer";

const WindowSizerPage = () => {
  return (
    <div>
      <WindowVP>
        {(state) => {
          const { width, height } = state;
          return (
            <section>
              <p>Current width:{width} px</p>
              <p>Current height:{height} px</p>
            </section>
          );
        }}
      </WindowVP>
    </div>
  );
};

export default WindowSizerPage;
