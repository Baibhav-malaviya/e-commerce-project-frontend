function Button({
  children,
  type = "submit",
  className = "",
  bgColor = "bg-blue-600",
  color = " text-white",
  width = "w-full",
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-6 mx-auto my-2 py-2 rounded-lg transition delay-150 duration-300 hover:rounded-xl hover:hue-rotate-15 font-bold  ${width}  ${bgColor} ${className} ${color}`}
    >
      {children}
    </button>
  );
}

export default Button;
