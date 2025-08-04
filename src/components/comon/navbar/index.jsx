import { useState } from "react";
import Logo from "./Logo";
import NavigateList from "./NavigateList";
import { HiOutlineViewList } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 z-50 w-full h-16 flex justify-between items-center px-2 md:px-20 bg-white">
        <Logo />

        {/* Desktop menu (selalu tampil di md ke atas) */}
        <div className="hidden md:block">
          <NavigateList />
        </div>

        {/* Tombol hamburger hanya di mobile */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          <HiOutlineViewList />
        </button>
      </nav>

      {/* Mobile menu: tampil jika `open` */}
      {open && (
        <div className="md:hidden flex justify-center items-center absolute top-16 left-0 w-full z-40 bg-white shadow-md">
          <NavigateList isMobile />
        </div>
      )}
    </>
  );
}
