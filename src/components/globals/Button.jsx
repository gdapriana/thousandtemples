const Button = ({ text, path, customClass }) => {
  return (
    <a
      className={`${customClass} text-base lg:text-lg text-white bg-indigo-400 font-bold w-auto py-2 px-4 rounded-full`}
      href={path}
    >
      {text}
    </a>
  );
};

export default Button;
