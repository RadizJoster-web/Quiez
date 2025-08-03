import { Link } from "react-router-dom";

export default function NavigateList() {
  return (
    <div>
      <ul className="flex gap-5">
        <li>
          <Link to="/" className="font-bold hover:text-primary duration-200">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="font-bold hover:text-primary duration-200"
          >
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
    </div>
  );
}
