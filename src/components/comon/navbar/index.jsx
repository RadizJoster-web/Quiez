import Logo from "./Logo";
import NavigateList from "./NavigateList";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full h-16 flex justify-between items-center px-20">
      <Logo />
      <NavigateList />
    </nav>
  );
}
