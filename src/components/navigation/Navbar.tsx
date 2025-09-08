import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { NavButton } from "./NavButton";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Force refresh by navigating to home and then reloading the page
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="w-full h-16 flex justify-between items-center bg-gradient-to-r from-[#F2580D] to-[#F8AB86] px-4">
      <button
        onClick={handleLogoClick}
        className="flex items-center gap-2 text-white font-bold hover:opacity-80 transition-opacity cursor-pointer"
      >
        <Mail className="w-8 h-8" />
        <span className="text-2xl">MoodLetter</span>
      </button>
      <div className="flex items-center gap-2">
        <NavButton to="builder" />
        <NavButton to="recipients" />
        <NavButton to="campaigns" />
      </div>
    </div>
  );
};
