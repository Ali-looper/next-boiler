export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioButtonProps {
  name: string;
  dimension?: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
}
