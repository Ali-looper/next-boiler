import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
}

const Button: React.FC<ButtonProps> = ({ 
    children, 
    onClick, 
    backgroundColor="bg-nutral-200", 
    textColor="text-blue-700", 
    width="w-50", 
    height="h-20", 
    className = "", 
    disabled= false 
  }) => {
  return (
    <button
      className={`${backgroundColor} ${textColor} ${width} ${height} rounded-2xl px-10 py-4 shadow-sm  transition-all ${disabled ? "cursor-not-allowed bg-gray-300 text-gray-500" : "hover:bg-blue-200"} ${className}`}
      onClick={onClick}
      disabled={disabled} >
      {children}
    </button>
  );
};

export default Button;
