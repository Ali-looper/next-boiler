import React from "react";

interface RadioOption {
    label: string;
    value: string;
}

interface RadioButtonProps {
    name: string;
    dimension?: string;
    options: RadioOption[];
    selectedValue: string;
    onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    name = "",
    dimension = "flex-col",
    options = [],
    selectedValue = "",
    onChange = () => {},
}) => {
    return (
        <div className={`flex ${dimension}`}>
            {options.map((option) => (
                <label
                    key={option.value}
                    className="flex items-center space-x-2 cursor-pointer text-surface-400"
                >
                    <input
                        type="radio"
                        name={name}
                        value={option.value}
                        checked={selectedValue === option.value}
                        onChange={() => onChange(option.value)}
                        className="hidden"
                    />
                    <div
                        className={`w-5 h-5 border-2 rounded-full flex items-center justify-center  ${selectedValue === option.value
                            ? "border-foundation-100 bg-foundation-100"
                            : "border-foundation-100"
                            }`}
                    >
                        {selectedValue === option.value && (
                            <div className="w-3 h-3 rounded-full"></div>
                        )}
                    </div>
                    <span className="text-[#07224D]">{option.label}</span>
                </label>
            ))}
        </div>
    );
};

export default RadioButton;
