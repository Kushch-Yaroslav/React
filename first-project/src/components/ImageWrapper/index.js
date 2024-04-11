import React from "react";

const ImageWrapper = (props) => {
  const { children, width, height, ...rest } = props;
  const wrapperStyle = {
    width: width,
    height: height,
    overflow: "hidden",
    objectFit: "cover",
  };
  console.log(rest);
  return (
    <div style={wrapperStyle} {...rest}>
      {children}
    </div>
  );
};

export default ImageWrapper;
