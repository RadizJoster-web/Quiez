export default function MyButton({ text }) {
  return (
    <button
      className="my-button text-white bg-primary font-bold font-kanit py-5 px-8 rounded-xl border-1 border-black cursor-pointer"
      role="button"
    >
      {text}
    </button>
  );
}
