import { Link } from "react-router-dom";

export default function NavigateList({ isMobile = false }) {
  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col text-center gap-2 p-4" // mobile style
          : "flex gap-5 items-center" // desktop style
      }`}
    >
      <li>
        <Link to="/" className="font-bold hover:text-primary duration-200">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="font-bold hover:text-primary duration-200">
          About
        </Link>
      </li>
      <li>
        <Link
          to="/play/quiz/changeusername"
          className="font-bold hover:text-primary duration-200"
        >
          Change Username
        </Link>
      </li>
    </ul>
  );
}
