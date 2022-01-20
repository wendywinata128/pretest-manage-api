const TextField = ({
  placeholder,
  onTyped,
  bgColor,
  textColor,
  Icon,
  className,
  value,
  title,
}) => {
  const textFieldColor = {
    borderColor: bgColor,
    color: textColor,
  };

  return (
    <div>
      <h6 className="text-left text-sm mb-1">{title}</h6>
      <div className={`flex relative ${className}`}>
        <input
          type="text"
          style={textFieldColor}
          className={`h-10 rounded-md ${
            Icon ? "pl-8" : "pl-2"
          } outline-0 bg-transparent border ${className}`}
          placeholder={placeholder}
          onKeyUp={onTyped}
          defaultValue={value}
        />
        {Icon ? (
          <Icon
            className="absolute left-2 top-2/4 -translate-y-2/4"
            color="white"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TextField;
