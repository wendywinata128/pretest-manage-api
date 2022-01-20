const TextArea = ({ className, placeholder, onTyped, value, title }) => (
  <div className={`w-full ${className}`}>
    <h6 className="text-left text-sm mb-1">{title}</h6>

    <textarea
      className={`outline-none border w-full border-black rounded-md pl-2 pt-2 resize-none`}
      rows="4"
      placeholder={placeholder}
      onKeyUp={onTyped}
      defaultValue={value}
    />
  </div>
);

export default TextArea;
