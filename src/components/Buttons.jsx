import React from 'react'

export const Button = ({width, height, bgc, color, onClick, children}) => {
  const colorCode = (color) => {
    if(typeof color === "boolean") {
      children = color ? "취소" : "완료";
      color = color ? "" : "green";
    };

    switch(color){
      case "red": return "#c44e4e";
      case "green": return "#4da853";
      case "blue": return "#458cc7";
      default: return "#c0c0c0";
    };
  };

  const styleBtn = {
    width,
    height,
    color,
    border: 0,
    backgroundColor: colorCode(bgc),
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <button
      style={styleBtn}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
