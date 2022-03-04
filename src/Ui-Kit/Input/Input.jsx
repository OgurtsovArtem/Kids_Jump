import "./Input.scss";

function Input({ className, placeholder, type = "text" }) {
  return (
    <input
      className={`${className} input`}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Input;
