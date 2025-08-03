import { Link } from "react-router-dom";

import HeroDesc from "./Herodesc";
import MyButton from "../../../elements/Button";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center gap-5">
      <HeroDesc />
      <span className="flex gap-5">
        <Link to="/play/quiz/inputname">
          <MyButton text="Let's Play" />
        </Link>
        <Link to="/contact">
          <MyButton text="Contact Us" />
        </Link>
      </span>
    </div>
  );
}
