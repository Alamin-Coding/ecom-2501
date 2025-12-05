import React from "react";
import { Link } from "react-router";

interface Button2Props {
  children: React.ReactNode;
  className?: string
  to?: string
}

const Button2: React.FC<Button2Props> = ({ children, className="", to=""}) => {
  return (
    <Link
    to={to}
      className={`bg-button2 hover:bg-hoverButton transition-all duration-300 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm ${className}`}
     
    >
      {children}
    </Link>
  );
};

export default Button2;
