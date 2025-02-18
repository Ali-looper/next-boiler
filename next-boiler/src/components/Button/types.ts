export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'danger'
  | 'success'
  | 'warning'
  | 'info';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
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
