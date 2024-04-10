import React, { useState, useEffect } from 'react';
import '../../index.css';

function FormInput({ label, placeholder, type, name }) {
  const [inputValue, setInputValue] = useState('');

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
    localStorage.setItem(name, newValue);
  };

  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered bg-white text-black' // Add text-black to make the text color black
        value={inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormInput;
