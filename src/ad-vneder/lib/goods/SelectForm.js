import React from 'react';

export default function SelectForm({ name, options }) {
  return (
    <select name={name}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
