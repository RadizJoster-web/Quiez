import { useNavigate, useLocation } from "react-router-dom";

import WarningText from "../components/sections/questions/WarningText";
import Questions from "../components/sections/questions/Questions";
import ButtonV2 from "../components/elements/ButtonV2";
import { useEffect } from "react";

export default function Question() {
  const navigate = useNavigate();

  // Get difficulty
  const location = useLocation();
  const { difficulty } = location.state || {};

  useEffect(() => {
    if (!difficulty) {
      navigate("/play/quiz/difficulty");
    }
  }, [difficulty, navigate]);

  // Send answers
  const handleAnswer = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target); // take all form data
    const entries = Object.fromEntries(formData.entries());

    // Redirect to result page & send answers data without state/props
    navigate("/play/quiz/result", {
      state: { answers: entries, difficulty: difficulty },
    }); // Same as Get method but not though url
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleAnswer(e)}
        className="min-h-screen flex flex-col justify-start items-start gap-10 px-20 py-20"
      >
        <WarningText />
        <Questions difficulty={difficulty} />
        <ButtonV2 name="Submit" type="submit" />
      </form>
    </div>
  );
}
