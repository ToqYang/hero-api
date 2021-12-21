interface ButtonProps {
  text: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="article__learn-more btn-mt" onClick={onClick}>
      {text}
    </button>
  );
};
