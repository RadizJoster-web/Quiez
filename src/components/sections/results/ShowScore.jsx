import CountUp from "./CountUp";

export default function ShowScore({ scores }) {
  return (
    <div className="flex justify-center items-center text-center gap-1">
      <p className="text-3xl md:text-5xl font-bold">Your Score is:</p>
      <CountUp
        from={0}
        to={scores}
        separator=","
        direction="up"
        duration={1}
        className="text-3xl md:text-5xl font-bold"
      />
    </div>
  );
}
