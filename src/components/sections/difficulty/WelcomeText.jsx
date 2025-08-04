export default function WelcomeText({ username }) {
  return (
    <header className="flex justify-center items-center flex-col">
      <h2 className="text-xl">
        👋 Welcome <span className="text-primary ">{username}</span>
      </h2>
      <h1 className="text-3xl md:text-5xl font-kanit">
        Chalange your intelligence
      </h1>
    </header>
  );
}
