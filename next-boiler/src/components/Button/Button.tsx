import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({
  title = "title",
  onClick = () => {},
  backgroundColor = "",
  variant = "primary",
  size = "md",
  textColor = "",
  width = "w-50",
  height = "h-20",
  className = "",
  disabled = false,
  loading = false,
  iconPrefix = "",
  iconSuffix = "",
  hover = "",
}) => {
  const variantStyles: Record<string, string> = {
    primary: "bg-foundation-100 text-surface-100 hover:bg-foundation-200",
    secondary: "bg-gray-600 text-surface-100 hover:bg-gray-700",
    outline:
      "border border-neutral-200 text-neutral-200 hover:bg-neutral-200 hover:text-black",
    danger: "bg-red-600 text-surface-100 hover:bg-red-700",
    success: "bg-green-600 text-surface-100 hover:bg-green-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    info: "bg-cyan-600 text-surface-100 hover:bg-cyan-700",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${backgroundColor} ${variantStyles[variant]} ${
        sizeStyles[size]
      } ${textColor} ${width} ${height} rounded-lg shadow-sm transition-all 
        ${
          disabled || loading
            ? "cursor-not-allowed bg-gray-300 text-gray-500"
            : hover
        }
        ${className}`}
      onClick={!loading ? onClick : undefined}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-surface-100"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
            ></path>
          </svg>
        </div>
      ) : (
        <>
          {iconPrefix && <span className="material-icons">{iconPrefix}</span>}
          {title}
          {iconSuffix && <span className="material-icons">{iconSuffix}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
