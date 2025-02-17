"use client";
import { useState } from "react";
import SelectDropdown from "./components/SelectDropdown";

const options = [
  { value: "option1", label: "Option 1", disabled: true },
  { value: "option2", label: "Option 2", disabled: false },
  { value: "option3", label: "Option 3", disabled: true },
];

export default function Home() {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    console.log("Selected Value:", value);
  };

  return (
    <div className="p-4">
      <SelectDropdown
        label="testing"
        options={options}
        readOnly={false}
        disabled={false}
        value={selectedValue}
        onChange={handleChange}
      />
      {/* <p> {selectedValue}</p> */}
    </div>
  );
}
