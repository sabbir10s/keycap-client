const Button = (props) => {
  console.log(props);
  const btnEnableDisable = props.isDisabled && "bg-gray-200 text-gray-500";
  const btnCategory =
    props.btnCategory === "primary"
      ? "bg-primary-700 shadow-md shadow-secondary/50 text-white"
      : "bg-secondary-500 shadow-md shadow-secondary/50 text-white";
  return (
    <button
      id={props.id}
      onClick={props.clickHandler}
      className={`px-10 py-2 ${props.className} ${btnCategory} ${btnEnableDisable}`}
      type={props.type}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
