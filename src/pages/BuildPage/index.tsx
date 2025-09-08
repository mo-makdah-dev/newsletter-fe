import type { ThemeConfigs } from "@/pages/BuildPage/logic/types";
import { useState } from "react";
import { ThemePicker } from "./components/ThemePicker";
import { NewsLetterBuilder } from "./components/NewsLetterBuilder";

const BuildPage = () => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeConfigs | null>(null);

  const handleBackToThemeSelection = () => {
    setSelectedTheme(null);
  };

  return (
    <div className="flex h-full w-full p-12">
      {selectedTheme ? (
        <NewsLetterBuilder
          selectedTheme={selectedTheme}
          onBackToThemeSelection={handleBackToThemeSelection}
        />
      ) : (
        <ThemePicker setSelectedTheme={setSelectedTheme} />
      )}
    </div>
  );
};

export default BuildPage;
