import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeText from "../components/sections/difficulty/WelcomeText";
import CardDefficultyList from "../components/sections/difficulty/CardDificultyList";
import ButtonV2 from "../components/elements/ButtonV2";
import InfoNotif from "../components/elements/notifications/info";

export default function Difficulty() {
  // State username
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [showNotif, setShowNotif] = useState(false);

  // Validate user to enter their name first
  useEffect(() => {
    const username = localStorage.getItem("username"); // take username from localstorage

    if (username) {
      setUsername(username);
    } else {
      window.location.href = "/play/quiz/inputname"; // redirect to inputNamePage if username is not found
    }
  }, []);

  // Handle function to pick difficulty
  const handleDifficulty = (e) => {
    const difficulty = e.target.value;
    setDifficulty(difficulty);
  };

  // Show notification when difficulty is changed
  useEffect(() => {
    setShowNotif(true);
    const timer = setTimeout(() => setShowNotif(false), 1000); // hide after 3s
    return () => clearTimeout(timer); // clear timeout if component re-renders
  }, [difficulty]);

  // Handle function to go to game page
  const navigate = useNavigate();

  const handleStartQuiz = (e) => {
    e.preventDefault();

    if (difficulty) {
      navigate("/play/quiz/questions", { state: { difficulty: difficulty } });
    } else {
      alert("Please select a difficulty");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center py-20 ">
      <form
        onSubmit={(e) => handleStartQuiz(e)}
        className="flex flex-col justify-center items-center w-full"
      >
        <WelcomeText username={username} />
        <CardDefficultyList handleDifficulty={handleDifficulty} />
        <ButtonV2 name="Start Quiz" type="submit" className="mt-50" />
        <InfoNotif
          text={`Difficulty changed to ${difficulty}`}
          position={{ top: "80px", right: "-10px" }}
          show={showNotif}
        />
      </form>
    </div>
  );
}
