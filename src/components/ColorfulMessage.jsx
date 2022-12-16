import React from "react";

// const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入
  const contentStyle = {
    color, // color: color,
    fontSize: "１８px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;  // デフォルトエクスポートは、一つだけ
