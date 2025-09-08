import { THEME_SETTINGS } from "../../logic/data";
import type { ThemeConfigs } from "../../logic/types";
import { ThemeCard } from "./ThemeCard";

type Props = {
  setSelectedTheme: (theme: ThemeConfigs) => void;
};

export const ThemePicker = ({ setSelectedTheme }: Props) => {
  return (
    <div className="flex flex-col gap-8 w-full items-center">
      <h1 className="text-3xl font-bold">Choose Your Mood</h1>
      <div className="flex gap-4 w-full ">
        {THEME_SETTINGS.map((cfg) => (
          <ThemeCard key={cfg.theme} config={cfg} onSelect={setSelectedTheme} />
        ))}
      </div>
    </div>
  );
};
