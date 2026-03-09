"use client";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-[#03a9f4] hover:bg-[#03a9f4]/90 text-white",
    secondary:
      "bg-[#F7FAFC] hover:bg-gray-200 text-[#2d3748] border border-gray-300",
    ghost: "bg-transparent hover:bg-gray-100 text-[#2d3748]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
