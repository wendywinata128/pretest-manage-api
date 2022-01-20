import PropTypes from "prop-types";

const Filter = ({ options, className, onDropdownChanged }) => {
  return (
    <div className={`${className}`}>
      <select
        className={`h-10 shadow rounded-md px-8 outline-0 bg-[#3E4D80] border-0 text-white `}
        onChange={onDropdownChanged}
      >
        {options.map((option, idx) => {
          return (
            <option key={idx} value={option.value}>
              {option.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

Filter.defaultProps = {
  options: [],
};

Filter.propTypes = {
  options: PropTypes.array,
};

export default Filter;
