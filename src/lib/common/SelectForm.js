import React from 'react';

export default function SelectForm({ name, options, onChange }) {
  return (
    <select name={name} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
