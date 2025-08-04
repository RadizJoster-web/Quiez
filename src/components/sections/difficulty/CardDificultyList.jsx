import TiltedCard from "./TiltedCard";

export default function CardDificultyList({ handleDifficulty }) {
  return (
    <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-20 my-10">
      {[
        { id: "easy", text: "Easy", emoji: "😁", color: "text-black" },
        { id: "medium", text: "Medium", emoji: "😊", color: "text-black" },
        { id: "hard", text: "Hard", emoji: "😑", color: "text-black" },
        {
          id: "impossible",
          text: "Impossible",
          emoji: "🤬",
          color: "text-red-600 font-bold",
        },
      ].map(({ id, text, emoji, color }) => (
        <li key={id}>
          <input
            type="radio"
            name="difficulty"
            id={id}
            value={id}
            onChange={(e) => handleDifficulty(e)}
            className="hidden"
          />
          <label htmlFor={id}>
            <TiltedCard
              imageSrc={`${import.meta.env.BASE_URL}difficulty-card/${id}.jpeg`}
              altText={text}
              captionText={text}
              containerHeight="250px" // kecilkan untuk mobile
              containerWidth="100%" // fleksibel
              imageHeight="250px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p
                  className={`text-center text-3xl sm:text-4xl md:text-5xl ${color}`}
                >
                  {emoji} <br /> {text.toUpperCase()}
                </p>
              }
            />
          </label>
        </li>
      ))}
    </ul>
  );
}
