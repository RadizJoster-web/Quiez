import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 z-50 w-full h-16 flex justify-between items-center px-20 ">
      <h1 className="text-sm font-medium">&copy; 2025 Radiz Quiz App</h1>

      <div className="flex gap-4 text-xl">
        <Link
          to="https://github.com/RadizJoster-web"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors"
        >
          <FaGithub />
        </Link>
        <Link
          to="https://www.linkedin.com/in/radiz-dirganta-834677331/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://x.com/RadizDirga0854"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition-colors"
        >
          <FaTwitter />
        </Link>

        <Link
          to="https://www.instagram.com/radizslur/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition-colors"
        >
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
