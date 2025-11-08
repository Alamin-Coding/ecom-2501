import React from "react";

interface Button1Props {
  children: React.ReactNode;
  className?: string;
}

const Button1: React.FC<Button1Props> = ({ children, className="", }) => {
  return (
    <button
      type="submit"
      className={`bg-white cursor-pointer transition-all duration-300 hover:bg-hoverButton2 border-gray-500 border text-black font-medium font-poppins px-12 py-4 rounded-sm ${className}`}
    >
      {children}
    </button>
  );
};

export default Button1;
