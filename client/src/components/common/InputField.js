const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        {...props}
      />
    </div>
  );
};

export default InputField;
