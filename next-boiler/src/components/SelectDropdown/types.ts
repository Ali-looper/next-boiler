export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectDropdownProps {
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}
