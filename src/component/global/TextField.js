const TextField = ({
  placeholder,
  onTyped,
  bgColor,
  textColor,
  Icon,
  className,
  value,
}) => {
  const textFieldColor = {
    borderColor: bgColor,
    color: textColor,
  };

  return (
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
  );
};

export default TextField;
