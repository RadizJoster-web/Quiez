import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TiltedCard from "../components/sections/difficulty/TiltedCard";
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
        <header className="flex justify-center items-center flex-col">
          <h2 className="text-xl">
            👋 Welcome <span className="text-primary ">{username}</span>
          </h2>
          <h1 className="text-5xl font-kanit">Chalange your intelligence</h1>
        </header>

        <ul className="w-full h-100 flex justify-center items-start gap-10 my-20">
          <li>
            <input
              type="radio"
              name="difficulty"
              id="easy"
              value="easy"
              onChange={(e) => handleDifficulty(e)}
              className="hidden"
            />
            <label htmlFor="easy">
              <TiltedCard
                imageSrc={`${
                  import.meta.env.BASE_URL
                }difficulty-card/easy.jpeg`}
                altText="Easy"
                captionText="Easy"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-center text-5xl">
                    😁 <br /> EASY
                  </p>
                }
              />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="difficulty"
              id="medium"
              value="medium"
              onChange={(e) => handleDifficulty(e)}
              className="hidden"
            />
            <label htmlFor="medium">
              <TiltedCard
                imageSrc={`${
                  import.meta.env.BASE_URL
                }difficulty-card/medium.jpeg`}
                altText="medium"
                captionText="Medium"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-center text-5xl">
                    😊 <br /> MEDIUM
                  </p>
                }
              />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="difficulty"
              id="hard"
              value="hard"
              onChange={(e) => handleDifficulty(e)}
              className="hidden"
            />
            <label htmlFor="hard">
              <TiltedCard
                imageSrc={`${
                  import.meta.env.BASE_URL
                }difficulty-card/hard.jpeg`}
                altText="hard"
                captionText="Hard"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-center text-5xl">
                    😑 <br /> Hard
                  </p>
                }
              />
            </label>
          </li>
          <li>
            <input
              type="radio"
              name="difficulty"
              id="impossible"
              value="impossible"
              onChange={(e) => handleDifficulty(e)}
              className="hidden"
            />
            <label htmlFor="impossible">
              <TiltedCard
                imageSrc={`${
                  import.meta.env.BASE_URL
                }difficulty-card/impossible.jpeg`}
                altText="impossible"
                captionText="Impossible"
                containerHeight="400px"
                containerWidth="300px"
                imageHeight="400px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="text-center text-5xl text-red-600 font-bold">
                    🤬 <br /> IMPOSSIBLE
                  </p>
                }
              />
            </label>
          </li>
        </ul>

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
