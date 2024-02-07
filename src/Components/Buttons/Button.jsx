import clsx from "clsx";
const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-[15px] px-[25px]",
        {
          "bg-primary text-white rounded-lg": variant === "primary",
          "bg-white border-primary rounded-lg flex items-center text-black":
            variant === "secondary",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
