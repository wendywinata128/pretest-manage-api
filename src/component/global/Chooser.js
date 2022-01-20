import { useState } from "react";

const Chooser = ({
  options,
  className,
  name,
  onValueChanged,
  defaultValue,
  title,
}) => {
  const [valueOptions, setValueOptions] = useState(
    defaultValue == null ? options[0].value.toString() : defaultValue.toString()
  );

  return (
    <div>
      <h6 className="text-left text-sm mb-1">{title}</h6>

      <div className={`flex ${className}`}>
        {options.map((option, idx) => {
          return (
            <div key={idx} className="flex-1 flex">
              <input
                className="hidden"
                type="radio"
                id={option.name}
                name={name}
                onChange={(e) => {
                  setValueOptions(e.target.value);
                  onValueChanged(e.target.value);
                }}
                value={option.value}
              />
              <label
                className={`border border-black w-full mx-1 py-2 rounded-md ${
                  valueOptions === option.value
                    ? "bg-[#0059A0] text-white border-[#0059A0]"
                    : ""
                }`}
                htmlFor={option.name}
                name={name}
              >
                {option.name}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Chooser.defaultProps = {
  options: [],
};

export default Chooser;
