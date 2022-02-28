import "./Input.scss";

function Input({ classname, placeholder }) {
  return (
    <input
      className={`${classname} input`}
      type="text"
      placeholder={placeholder}
    />
  );
}

export default Input;
