"use client";
import React from "react";

interface SelectDropdownProps {
  options?: { value: string; label: string; disabled?: boolean }[];
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  className?: string;
  disabled?: boolean; 
  readOnly?: boolean;
  required?: boolean;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options = [],
  value = "",
  onChange = () => {},
  label = "",
  className = "",
  disabled = false,
  readOnly = false,
  required = false,
}) => {
  const selectId = label
    ? label.replace(/\s+/g, "-").toLowerCase()
    : "select-dropdown";

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className="w-full bg-surface-100 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed"
        value={value}
        onChange={(e) => !readOnly && onChange(e.target.value)}
        aria-label={label || "Select an option"}
        disabled={disabled} 
        required={required}
      >
        {options.length > 0 ? (
          options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No options available
          </option>
        )}
      </select>
    </div>
  );
};

export default SelectDropdown;
