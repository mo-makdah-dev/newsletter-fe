import { LetterTemplate } from "@/components/common/LetterTemplate";
import type { ThemeConfigs } from "../../logic/types";
import { Pill } from "@/components/common/Pill";
import { useNewsLetterBuilder } from "../../hooks/useNewsLetterBuilder";
import { NewsLetterBuilderForm } from "./NewsLetterBuilderForm";
import { useGroupsStore } from "@/zustand";
import { SendIcon, ArrowLeft } from "lucide-react";
import { ClipLoader } from "react-spinners";

type Props = {
  selectedTheme: ThemeConfigs;
  onBackToThemeSelection: () => void;
};

export const NewsLetterBuilder = ({
  selectedTheme,
  onBackToThemeSelection,
}: Props) => {
  const { groups } = useGroupsStore();
  const {
    title,
    content,
    actionUrl,
    actionLabel,
    isSending,
    resetForm,
    setForm,
    disabled,
    sendNewsLetter,
    setColorIndex,
    selectedColorIndex,
    selectedGroups,
    setGroups,
  } = useNewsLetterBuilder();

  const mainColor = selectedTheme.colors[selectedColorIndex];
  const secondaryColor = selectedTheme.secondaryColors[selectedColorIndex];
  const textColor = selectedTheme.textColors[selectedColorIndex];

  const gradient = `linear-gradient(90deg, ${mainColor}, ${secondaryColor})`;

  return (
    <div className="w-full flex flex-col gap-4">
      <button
        onClick={onBackToThemeSelection}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors mb-2 cursor-pointer w-fit"
      >
        <ArrowLeft size={16} />
        <span>Back to Theme Selection</span>
      </button>
      <header className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Newsletter Builder</h1>
          <Pill label={selectedTheme.title} color={selectedTheme.mainColor} />
        </div>
        <button
          className="rounded-lg text-slate-700 px-4 py-2 flex items-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-default"
          style={{ background: gradient }}
          onClick={() => sendNewsLetter(selectedTheme)}
          disabled={disabled}
        >
          {isSending ? (
            <>
              <ClipLoader size={16} color={textColor} />
              <span style={{ color: textColor }}>Sending...</span>
            </>
          ) : (
            <>
              <span style={{ color: textColor }}>Send</span>
              <SendIcon />
            </>
          )}
        </button>
      </header>
      <div className="w-full h-fit flex gap-4">
        <div className="w-1/2 h-180 bg-white border border-slate-200 rounded-2xl p-4">
          <NewsLetterBuilderForm
            title={title}
            content={content}
            actionLabel={actionLabel}
            actionUrl={actionUrl}
            selectedTheme={selectedTheme}
            setForm={setForm}
            setColorIndex={setColorIndex}
            selectedColorIndex={selectedColorIndex}
            resetForm={resetForm}
            isSending={isSending}
            selectedGroups={selectedGroups}
            setSelectedGroups={setGroups}
            availableGroups={groups}
          />
        </div>
        <div className="w-1/2 h-180 bg-white border border-slate-200 rounded-2xl p-4">
          <p className="text-lg font-semibold mb-4">Live Preview</p>
          <div className="w-full h-[90%] bg-white border border-slate-200 rounded-2xl p-4">
            <LetterTemplate
              mainColor={mainColor}
              secondaryColor={secondaryColor}
              textColor={textColor}
              title={title}
              content={content}
              actionUrl={actionUrl}
              actionLabel={actionLabel}
              theme={selectedTheme.theme}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
