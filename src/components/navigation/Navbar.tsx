import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { NavButton } from "./NavButton";

export const Navbar = () => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-gradient-to-r from-[#F2580D] to-[#F8AB86] px-4">
      <Link to="/" className="flex items-center gap-2 text-white font-bold">
        <Mail className="w-8 h-8" />
        <span className="text-2xl">MoodLetter</span>
      </Link>
      <div className="flex items-center gap-2">
        <NavButton to="builder" />
        <NavButton to="recipients" />
        <NavButton to="campaigns" />
      </div>
    </div>
  );
};
