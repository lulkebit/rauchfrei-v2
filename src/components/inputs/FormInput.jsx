import React, { useState, useEffect } from 'react';

function FormInput({ label, placeholder, type, name }) {
  const [inputValue, setInputValue] = useState('');

  // Load value from localStorage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue !== null) {
      setInputValue(storedValue);
    }
  }, [name]);

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // Store value in localStorage
    localStorage.setItem(name, newValue);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="input input-bordered bg-white" // Add bg-white to override dark style
        value={inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormInput;
