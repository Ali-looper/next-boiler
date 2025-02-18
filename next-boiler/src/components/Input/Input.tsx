"use client";

import {

  FC,
 
  useCallback,
  useRef,
} from "react";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({
  onChange = () => {},
  onFocus = () => {},
  onBlur = () => {},
  value,
  id,
  defaultValue = "",
  type = "text",
  leftIcon = null,
  rightIcon = null,
  placeholder = "placeholder text",
  disabled = false,
  readOnly = false,
  width = "320px",
  leftIconProps = { onClick: () => {}, style: {} },
  rightIconProps = { onClick: () => {}, style: {} },
  errorMessage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInputElement = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();

      // Move cursor to the end of the text for applicable input types
      if (!(type === "number" || type === "email")) {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }

      // For number & email types, reset value to trigger input cursor reset
      if (type === "number" || type === "email") {
        const val = inputRef.current.value;
        inputRef.current.value = "";
        inputRef.current.value = val;
      }
    }
  }, [type]);

  return (
    <div style={{ width }}>
      <div
        tabIndex={0}
        onFocus={focusInputElement}
        aria-disabled={disabled}
        aria-readonly={readOnly}
        className={`w-full h-[64px] box-border rounded-[10px] outline-none border p-5 flex items-center gap-3 ${
          disabled
            ? "cursor-not-allowed bg-slate-50 border-gray-300"
            : "border-[#92A7BE] cursor-text focus-within:border-[#5793d3] focus-within:ring-1 focus-within:ring-[#5793d3] hover:shadow-md hover:border-[#5793d3]"
        }`}
      >
        {leftIcon && (
          <div
            className="min-w-6 h-6"
            onClick={leftIconProps?.onClick}
            style={leftIconProps?.style}
          >
            {leftIcon}
          </div>
        )}
        <input
          ref={inputRef}
          className="outline-none h-6 w-full disabled:cursor-not-allowed disabled:text-gray-400 disabled:bg-slate-50"
          placeholder={placeholder}
          id={id}
          value={value}
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
        />
        {rightIcon && (
          <div
            className="min-w-6 h-6"
            onClick={rightIconProps?.onClick}
            style={rightIconProps?.style}
          >
            {rightIcon}
          </div>
        )}
      </div>
      {errorMessage && (
        <div className="text-sm text-red-500 mt-1 ml-1">{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
