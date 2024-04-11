import React, { useEffect, useState } from "react";
function useWinSize() {
  const [sizes, setSizes] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handlerResize = () => {
    setSizes({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", handlerResize);
    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);
  return sizes;
}

export default useWinSize;
