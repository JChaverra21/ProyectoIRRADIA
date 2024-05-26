const currentDate = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 text-center md:items-center sm:w-full">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {currentDate}{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            IRRADIA
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
