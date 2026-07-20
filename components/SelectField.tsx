"use client";

import { useState } from "react";
import Select from "./ui/Select";

export interface SelectFieldProps {
  label: string;
  /** First entry is the placeholder; the rest are selectable options. */
  options: string[];
}

// Labelled wrapper around the reusable <Select> dropdown, holding the field's
// value so it can live inside the (server-rendered) contact form.
export default function SelectField({ label, options }: SelectFieldProps) {
  const [value, setValue] = useState("");
  const placeholder = options[0];
  const choices = options.slice(1);

  return (
    <div>
      <label className="mb-2 block text-[13px] font-medium text-[#5a6474]">
        {label}
      </label>
      <Select
        value={value}
        onChange={setValue}
        options={choices}
        placeholder={placeholder}
      />
    </div>
  );
}
