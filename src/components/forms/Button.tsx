import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="article__learn-more btn-mt" onClick={onClick}>
      {text}
    </button>
  );
};
