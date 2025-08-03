import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Data Questions
import QuestionsData from "../data/Questions";

import Appresiate from "../components/sections/results/Appresiate";
import ButtonProces from "../components/sections/results/ButtonProces";
import ShowScore from "../components/sections/results/ShowScore";
import ButtonV3 from "../components/elements/ButtonV3";

import { FaPersonRunning } from "react-icons/fa6";

export default function Result() {
  const [scores, setScores] = useState(0);
  const location = useLocation();
  const { answers, difficulty } = location.state || {};

  useEffect(() => {
    if (!answers || !difficulty) {
      // Redirect to the question page if no answers or difficulty is provided
      window.location.href = "/";
    }
  }, []);

  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Count correct answers [Scores]
  useEffect(() => {
    const questions = QuestionsData.find(
      (question) => question.difficulty === difficulty
    );

    // Get the real data question
    const question = questions.data;

    // Count correct answers
    question.forEach((q) => {
      const userAnswer = answers[`q${q.id}`]; // Get user answer in every id

      if (userAnswer === q.correctAnswer) {
        if (difficulty === "impossible") {
          setScores(scores + 10); // If difficulty is impossible, add 10 points
        } else {
          setScores(scores + 4); // Otherwise, add 4 point
        }
      }
    });
  }, []);

  if (!answers) {
    return <p>No data received. Please submit the quiz first.</p>;
  }

  return (
    <div className="w-full min-h-screen flex items-start justify-center py-20">
      <div className="flex flex-col justify-center items-center text-center">
        <Appresiate />

        {!showResult && (
          <ButtonProces
            loading={loading}
            setLoading={setLoading}
            setShowResult={setShowResult}
          />
        )}

        {showResult && <ShowScore scores={scores} />}
        {showResult && (
          <Link to="/" className="mt-5">
            <ButtonV3
              name="Back to Home"
              type="button"
              icon={
                <FaPersonRunning className="inline mr-2 rotate-y-180 text-xl" />
              }
            />
          </Link>
        )}
      </div>
    </div>
  );
}
