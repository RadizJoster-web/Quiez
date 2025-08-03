import { useState } from "react";

export default function ButtonProces({ loading, setLoading, setShowResult }) {
  const [loadingText, setLoadingText] = useState("Processing...");

  const texts = ["Processing...", "Calculating answers...", "Wait a sec..."];
  const handleClick = () => {
    setLoading(true);
    let index = 0;

    const interval = setInterval(() => {
      setLoadingText(texts[index]);
      index = (index + 1) % texts.length;
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
      setShowResult(true);
    }, 4000);
  };

  return (
    <button
      onClick={handleClick}
      className="relative overflow-hidden py-3 px-9 border rounded-xl border-black text-dark z-10 group cursor-pointer"
      disabled={loading}
    >
      <span
        className={`relative z-20 flex items-center gap-3 justify-center duration-350 
        ${loading ? "text-white" : "group-hover:text-white"}`}
      >
        {loading && (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        )}
        {loading ? loadingText : "Let's see your score"}
      </span>
      <span
        className={`absolute bottom-0 left-0 w-full transition-all duration-300 z-10 bg-primary 
      ${loading ? "h-full" : "h-0 group-hover:h-full"}`}
      />
    </button>
  );
}
