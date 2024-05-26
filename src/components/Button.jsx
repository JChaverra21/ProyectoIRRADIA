const Button = ({ href, title, img }) => {
  return (
    <div className="flex flex-col items-center">
      <a
        href={href}
        className="transform transition duration-500 ease-in-out hover:scale-110"
      >
        <img src={img} alt={title} className="w-64 h-64 object-cover rounded-lg" />
        <h5 className="mb-2 text-center text-xl lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray">
          {title}
        </h5>
      </a>
    </div>
  );
};

export default Button;
