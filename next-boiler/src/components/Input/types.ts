import {
  ChangeEventHandler,
  CSSProperties,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface InputProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value?: string | number;
  id?: string;
  defaultValue?: string | number;
  type?: "text" | "email" | "password" | "tel" | "number" | "search";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  width?: string | number;
  rightIconProps?: {
    onClick?: MouseEventHandler<HTMLDivElement>;
    style?: CSSProperties;
  };
  leftIconProps?: {
    onClick?: MouseEventHandler<HTMLDivElement>;
    style?: CSSProperties;
  };
  errorMessage?: string;
}
