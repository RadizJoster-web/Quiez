export default function ButtonV3({ name, type, icon }) {
  return (
    <button
      type={type ? type : "button"}
      className="relative overflow-hidden py-3 px-9 border rounded-xl border-black text-lighter-dark z-10 group cursor-pointer"
    >
      <span className="relative z-20 flex items-center group-hover:text-white duration-350">
        {icon}
        {name}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0 bg-primary transition-all duration-300 group-hover:h-full z-10" />
    </button>
  );
}
