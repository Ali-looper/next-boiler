import React, { JSX } from "react";
import { HeadingProps } from "./types";

const Heading: React.FC<HeadingProps> = ({
  level = "h1",
  weight = "bold",
  className = "",
  children,
}) => {
  const baseStyles = "font-poppins text-gray-900";
  const styles: Record<
    "h1" | "h2" | "h3" | "h4" | "h5",
    { bold: string; regular: string }
  > = {
    h1: {
      bold: "text-[25px] font-[700] leading-[37.5px]",
      regular: "text-[20px] font-[400] leading-[30px]",
    },
    h2: {
      bold: "text-[18px] font-[700] leading-[27px]",
      regular: "text-[18px] font-[400] leading-[27px]",
    },
    h3: {
      bold: "text-[16px] font-[700] leading-[24px]",
      regular: "text-[16px] font-[400] leading-[24px]",
    },
    h4: {
      bold: "text-[14px] font-[700] leading-[21px]",
      regular: "text-[14px] font-[400] leading-[21px]",
    },
    h5: {
      bold: "text-[12px] font-[700] leading-[18px]",
      regular: "text-[12px] font-[400] leading-[18px]",
    },
  };

  const HeadingTag: keyof JSX.IntrinsicElements = level;

  return React.createElement(
    HeadingTag,
    { className: `${baseStyles} ${styles[level][weight]} ${className}`.trim() },
    children
  );
};

export default Heading;
