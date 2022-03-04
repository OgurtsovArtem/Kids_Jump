import "./Textarea.scss";

function Textarea({
  className,
  placeholder,
  type = "text",
  rows = "5",
  cols = "45",
  name = "textarea",
}) {
  return (
    <textarea
      className={`${className} textarea`}
      rows={rows}
      cols={cols}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default Textarea;
