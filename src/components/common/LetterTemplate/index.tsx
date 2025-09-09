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
  onCtaClicked?: () => void;
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
  onCtaClicked,
}) => {
  const titleText = title || "Your Newsletter Title";
  const contentText = content || "Your newsletter content will appear here...";
  const actionLabelText = actionLabel || "Call to Action Button";

  // Ensure the URL is treated as absolute
  const getAbsoluteUrl = (url: string) => {
    if (!url) return "/";
    // If it already has a protocol, use as-is
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    // If it looks like a domain (contains dots), add https://
    if (url.includes(".")) {
      return `https://${url}`;
    }
    // For simple strings like "x", treat as a domain and add https://
    return `https://${url}`;
  };

  const actionUrlText = getAbsoluteUrl(actionUrl);

  const gradient = `linear-gradient(90deg, ${mainColor}, ${secondaryColor})`;

  // Helper function to convert theme to icon
  const getIconFromTheme = (theme: LetterTheme) => {
    if (theme === "celebration") return <PartyPopper color={textColor} />;
    if (theme === "urgent") return <AlertTriangle color={textColor} />;
    if (theme === "informative") return <Globe color={textColor} />;
    return <GaugeIcon color={textColor} />;
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
            onClick={onCtaClicked}
          >
            {actionLabelText}
          </a>
        </div>
      </div>
    </div>
  );
};
