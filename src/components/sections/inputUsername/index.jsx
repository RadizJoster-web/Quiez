import ButtonV2 from "../../elements/ButtonV2";

export default function InputUsername({ handleFormUsername }) {
  return (
    <form
      onSubmit={(e) => handleFormUsername(e)}
      className="w-full flex flex-col md:flex-row items-center md:items-end justify-center gap-5 px-2"
    >
      <span className="flex flex-col gap-5 items-center">
        <h1 className="text-2xl font-kanit flex flex-col items-center gap-1">
          Enter Your Name{" "}
          <span className="text-lighter-dark text-lg">
            it doesn't matter if it's not your real name
          </span>
        </h1>

        <input
          type="text"
          name="username"
          className="w-full md:w-150 py-3 outline-0 text-xl text-center border-b-2"
          required
        />
      </span>
      <ButtonV2 name="Next" type="submit" />
    </form>
  );
}
