const SavingsInput = ({
  label,
  placeholder,
  type,
  name,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='input input-bordered bg-white text-black' // Add text-black to make the text color black
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default SavingsInput;
