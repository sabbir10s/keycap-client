const Button = (props) => {
  console.log(props);
  const btnEnableDisable = !props.isDisabled
    ? "bg-primary-700 shadow-md shadow-secondary/50 text-white"
    : "bg-gray-200 text-gray-500 ";
  const btnCategory =
    !props.btnCategory === "primary" ? "bg-primary-700" : "bg-secondary-500";
  return (
    <button
      id={props.id}
      onClick={props.clickHandler}
      className={`px-10 py-2 ${props.className} ${btnEnableDisable}`}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
