"use client"
import React, { useState } from "react";
import RadioButton from "./components/RadioButton";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
];

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <div className="">
      <RadioButton
        name="name"
        options={options}
        selectedValue={selectedValue}
        onChange={setSelectedValue}
      />
    </div>
  );
}
