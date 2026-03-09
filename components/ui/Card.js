const Card = ({ children, className = "", hover = true, ...props }) => {
  const baseStyles = "bg-white rounded-xl p-6 transition-all duration-300";
  const hoverStyles = hover ? "hover:shadow-lg hover:-translate-y-1" : "";

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
