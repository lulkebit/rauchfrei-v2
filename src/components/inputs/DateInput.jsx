import React, { useState, useEffect } from 'react';

function DateInput({ label, name }) {
  const [inputValue, setInputValue] = useState('');

  // Load value from localStorage on component mount
  useEffect(() => {
    const storedValue = localStorage.getItem(name);
    if (storedValue !== null) {
      setInputValue(storedValue);
    }
  }, [name]);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setInputValue(selectedDate);
    localStorage.setItem(name, selectedDate);
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        type="date"
        className="input input-bordered"
        value={inputValue}
        max={new Date().toISOString().split('T')[0]}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DateInput;
