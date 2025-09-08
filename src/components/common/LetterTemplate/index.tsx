import type { LetterTheme } from "@/pages/BuildPage/logic/types";
import { AlertTriangle, GaugeIcon, Globe, PartyPopper } from "lucide-react";
import React from "react";

export interface LetterTemplateProps {
  mainColor: string;
  secondaryColor: string;
  textColor: string;
  title: string;
  content: React.ReactNode;
  actionUrl: string;
  actionLabel: string;
  theme: LetterTheme;
}

export const LetterTemplate: React.FC<LetterTemplateProps> = ({
  mainColor,
  secondaryColor,
  theme,
  title,
  content,
  actionUrl,
  actionLabel,
  textColor,
}) => {
  const titleText = title || "Your Newsletter Title";
  const contentText = content || "Your newsletter content will appear here...";
  const actionLabelText = actionLabel || "Call to Action Button";
  const actionUrlText = actionUrl || "/";

  const gradient = `linear-gradient(90deg, ${mainColor}, ${secondaryColor})`;

  // Helper function to convert theme to icon
  const getIconFromTheme = (theme: LetterTheme) => {
    if (theme === "celebration") return <PartyPopper color="white" />;
    if (theme === "urgent") return <AlertTriangle color="white" />;
    if (theme === "informative") return <Globe color="white" />;
    return <GaugeIcon color="white" />;
  };

  return (
    <div className="w-full h-full flex items-start justify-center bg-white">
      <div className="w-full flex flex-col gap-8 p-4">
        <div
          className="rounded-t-2xl p-8 flex items-center justify-center text-center"
          style={{ background: gradient }}
        >
          <div className="flex items-center gap-4">
            <div style={{ color: textColor }}>{getIconFromTheme(theme)}</div>
            <h1
              className="text-3xl font-bold bg-clip-text text-transparent"
              style={{ backgroundImage: gradient, color: textColor }}
            >
              {titleText}
            </h1>
          </div>
        </div>

        <div className="text-gray-500 italic text-lg text-center px-2">
          {contentText}
        </div>

        <div className="flex justify-center">
          <a
            href={actionUrlText}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl text-lg font-semibold shadow-sm transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundImage: gradient, color: textColor }}
          >
            {actionLabelText}
          </a>
        </div>
      </div>
    </div>
  );
};
