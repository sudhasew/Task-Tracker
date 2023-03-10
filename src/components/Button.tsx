import React from "react";
import "../Button.css";

interface Props {
  color: string;
  text: string;
  onClick: () => void;
}

const Button = ({ color, text, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick}
        style={{ background: color }}
        className="addBtn"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
