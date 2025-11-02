import React from "react";

interface Button2Props {
  children: React.ReactNode;
}

const Button2: React.FC<Button2Props> = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-button2 hover:bg-red-600 cursor-pointer text-white font-medium font-poppins px-12 py-4 rounded-sm"
    >
      {children}
    </button>
  );
};

export default Button2;
