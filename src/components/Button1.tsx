import React from "react";

interface Button1Props {
  children: React.ReactNode;
}

const Button1: React.FC<Button1Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-white cursor-pointer border-gray-500 border text-black font-medium font-poppins px-12 py-4 rounded-sm"
    >
      {children}
    </button>
  );
};

export default Button1;
