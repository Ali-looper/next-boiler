export interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  backgroundColor?: string;
  textColor?: string;
  width?: string;
  height?: string;
  iconPrefix?: string;
  iconSuffix?: string;
  hover?: string;
}
