"use client";

import React, { useState } from "react";
import { TypographyProps } from "./types";

const Typography: React.FC<TypographyProps> = ({
  children,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = () => setIsFocused(true);

  return (
    <div
      className={`border rounded-[16px] p-[24px] flex flex-col gap-[24px] transition-all duration-200 ${
        isFocused
          ? "border-[#5793d3] shadow-md focus-within:ring-1 focus-within:ring-[#5793d3]"
          : "border-[#92A7BE] cursor-text hover:shadow-md hover:border-[#5793d3]"
      } ${className}`}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                onFocus?: () => void;
                onBlur?: () => void;
                onChange?: () => void;
              }>,
              {
                onFocus: handleFocus,
                onBlur: handleBlur,
                onChange: handleChange,
              }
            )
          : child
      )}
    </div>
  );
};

export default Typography;
