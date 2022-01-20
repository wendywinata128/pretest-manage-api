const Button = ({
  title,
  Icon,
  className,
  textColor,
  shadow,
  backgroundColor,
  onClicked,
}) => {
  const buttonStyle = {
    color: textColor,
    background: backgroundColor,
  };

  return (
    <button
      style={buttonStyle}
      className={`flex items-center justify-center  rounded-md h-10 px-4 ${
        shadow ? "shadow" : ""
      } ${className}`}
      type="button"
      onClick={onClicked}
    >
      {Icon ? <Icon size="16" className={`${title ? "mr-2" : ""}`} /> : ""}
      {title ? title : ""}
    </button>
  );
};

Button.defaultProps = {
  textColor: "white",
  shadow: false,
};

export default Button;
