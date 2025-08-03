import { useState } from "react";
import InputUsername from "../components/sections/inputUsername";
import Loading from "../components/elements/loading";

export default function InputNamePage() {
  const [load, setLoad] = useState(true);

  const handleFormUsername = (e) => {
    e.preventDefault();

    const username = e.target.username.value;

    if (username) {
      localStorage.setItem("username", username);
      window.location.href = "/play/quiz/difficulty";
    } else {
      alert("Please enter your name");
    }
  };

  // Check is the user have an username
  // if true redirect to /play/quiz/difficulty
  useState(() => {
    const username = localStorage.getItem("username");
    if (username) {
      window.location.href = "/play/quiz/difficulty";
    } else {
      setLoad(false);
    }
  }, []);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      {load ? (
        <Loading />
      ) : (
        <InputUsername handleFormUsername={handleFormUsername} />
      )}
    </div>
  );
}
