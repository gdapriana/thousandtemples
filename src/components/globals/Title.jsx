const Title = ({ title, subtitle, customClass, titleClass, subtitleClass }) => {
  return (
    <div className={`${customClass}`}>
      <h1
        className={`text-lg lg:text-2xl lg:my-2 text-neutral-600 font-bold ${titleClass}`}
      >
        {title}
      </h1>
      <p className={`text-sm lg:text-base text-neutral-600 ${subtitleClass}`}>
        {subtitle}
      </p>
    </div>
  );
};

export default Title;
