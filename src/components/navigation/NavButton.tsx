import { History, Mail, Users } from "lucide-react";
import { NavLink } from "react-router-dom";

const routes = {
  builder: {
    path: "/",
    icon: <Mail className="w-4 h-4" />,
    label: "Builder",
  },
  recipients: {
    path: "/recipients",
    icon: <Users className="w-4 h-4" />,
    label: "Recipients",
  },
  campaigns: {
    path: "/campaigns",
    icon: <History className="w-4 h-4" />,
    label: "Campaigns",
  },
};

type Props = {
  to: keyof typeof routes;
};

export const NavButton = ({ to }: Props) => {
  return (
    <NavLink
      to={routes[to].path}
      end
      className={({ isActive }) =>
        `flex items-center gap-2 px-3 py-2 rounded-md text-white font-bold ${
          isActive ? "bg-white/20" : "hover:bg-white/10"
        }`
      }
    >
      {routes[to].icon}
      {routes[to].label}
    </NavLink>
  );
};
