import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <h1 className="font-kanit text-4xl md:text-5xl">
          Qui<span className="text-primary">ez</span>
        </h1>
      </Link>
    </div>
  );
}
