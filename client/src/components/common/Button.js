const Button = ({
  children,
  onClick,
  variant = "secondary",
  size = "medium",
  icon,
  className = "",
  ...props
}) => {
  const buttonClass = `btn ${variant} ${size} ${
    icon ? "icon-only" : ""
  } ${className}`;
  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {icon && (
        <i
          className={`fas fa-${icon}`}
          style={{ marginRight: children ? "8px" : "0" }}
        ></i>
      )}
      {children}
    </button>
  );
};

export default Button;
