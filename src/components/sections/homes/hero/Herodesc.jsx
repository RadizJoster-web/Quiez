import RotatingText from "./RotatingText";

export default function HeroDesc() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      {/* Animate text */}
      <span className="flex gap-1 items-center">
        <h2>Make You More</h2>
        <RotatingText
          texts={["Smart", "Intelligent", "Creative", "Cool!"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0.5 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </span>

      {/* Header Text */}
      <h1 className="font-kanit text-9xl pb-5">
        QUI<span className="text-primary">EZ</span>
      </h1>

      {/* Sub Header Text */}
      <h2 className="font-kanit text-lg text-lighter-dark text-center">
        Think you're smart?
        <br />
        Prove it by taking on Quiez, challenging quizzes that show just how
        smart you really are!
      </h2>
    </div>
  );
}
