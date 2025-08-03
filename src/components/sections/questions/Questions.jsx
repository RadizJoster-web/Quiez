import { useEffect, useState } from "react";
import Loading from "../../elements/loading";

// Data Questions
import QuestionsData from "../../../data/Questions";

export default function Questions({ difficulty }) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const matched = QuestionsData.find((q) => q.difficulty === difficulty); // Filter data questions by difficulty

    if (matched) {
      setQuestions(matched.data); // sent all data questions to state
      setLoading(false);
    }
  }, [difficulty]);

  return (
    <ul className="min-h-screen flex flex-col gap-5">
      {loading ? (
        <Loading />
      ) : (
        questions.map((q, index) => (
          <li key={q.id} className="flex gap-2 max-w-250">
            <p>{String(index + 1).padStart(2, "0")}.</p>
            <div className="flex flex-col gap-2">
              <p>{q.question}</p>
              {q.options.map((opt, i) => {
                const optionId = `o${i + 1}${q.name}`;
                return (
                  <span key={optionId} className="flex gap-2 ">
                    <input
                      type="radio"
                      name={q.name}
                      id={optionId}
                      value={opt}
                      required
                    />
                    <label htmlFor={optionId} className="cursor-pointer">
                      {opt}
                    </label>
                  </span>
                );
              })}
            </div>
          </li>
        ))
      )}
    </ul>
  );
}
