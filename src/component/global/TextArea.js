const TextArea = ({ className, placeholder, onTyped, value }) => (
  <textarea
    className={`outline-none border border-black ${className} rounded-md pl-2 pt-2 resize-none`}
    rows="4"
    placeholder={placeholder}
    onKeyUp={onTyped}
    defaultValue={value}
  />
);

export default TextArea;
