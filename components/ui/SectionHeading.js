const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignStyles = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div
      className={`mb-12 ${alignStyles[align]} ${className}`}
      data-aos="fade-up"
    >
      {title && (
        <h2 className="text-3xl font-bold text-[#2d3748] mb-4">{title}</h2>
      )}
      {subtitle && (
        <p className="text-[#718096] text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
