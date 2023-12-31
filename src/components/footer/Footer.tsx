
export const Footer = () => {
    const author = require('../../assets/Logo No BG.png');
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <img
              src={author}
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Ludivico Oguan
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://vicoguan.github.io/Portfolio-CV/#profile"
                className="mr-4 hover:underline md:mr-6 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ludivico-oguan-62725b27a/"
                className="mr-4 hover:underline md:mr-6"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vicolulu17/?utm_source=qr"
                className="mr-4 hover:underline md:mr-6 "
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://vicoguan.github.io/Portfolio-CV/#profile" className="hover:underline">
            Vic Oguan
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
