import React from "react";

const Button = ({ onClick, title, isdisable, className }) => {
  return (
    <button onClick={onClick} className={` ${className}`} disabled={isdisable}>
      {title}
    </button>
  );
};

export default Button;
