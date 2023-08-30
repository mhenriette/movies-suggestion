const TextInput = ({ value, onChange, placeholder, handleKeyPress }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="text-input"
      placeholder={placeholder}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TextInput;