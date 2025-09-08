import { Link, useLocation } from "react-router-dom";

export const SectionsBar = () => {
  const location = useLocation();

  const sections = [
    { name: "Feed", path: "/feed" },
    { name: "Data Points", path: "/data-points" },
  ];

  return (
    <div className="py-8 px-7">
      <div className="flex gap-4">
        {sections.map((section) => {
          const isActive = location.pathname === section.path;

          return (
            <Link
              key={section.path}
              to={section.path}
              className={`
                w-55 py-1 px-4 rounded-lg text-center font-medium transition-colors
                ${
                  isActive
                    ? "bg-[#105F86] text-white"
                    : "bg-[#F7F9FB] text-gray-700 hover:bg-gray-100"
                }
              `}
            >
              {section.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
