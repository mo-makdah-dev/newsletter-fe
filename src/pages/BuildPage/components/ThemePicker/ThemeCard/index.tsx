import type { ThemeConfigs } from "@/pages/BuildPage/logic/types";

type ThemeCardProps = {
  config: ThemeConfigs;
  onSelect: (config: ThemeConfigs) => void;
};

export const ThemeCard = ({ config, onSelect }: ThemeCardProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(config)}
      className="flex w-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:shadow-md cursor-pointer"
    >
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full"
        style={{ background: config.mainColor }}
      >
        {config.icon}
      </div>

      <div className="mt-6 text-center">
        <div className="text-2xl font-semibold text-slate-900">
          {config.title}
        </div>
        <div className="mt-2 max-w-[28ch] text-slate-500">
          {config.description}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4">
        {config.colors.map((c) => (
          <span
            key={c}
            className="h-6 w-6 rounded-full border border-slate-200"
            style={{ background: c }}
          />
        ))}
      </div>

      <div className="mt-6 w-full rounded-xl border border-slate-200 bg-slate-50 py-3 text-center text-slate-800 transition-colors group-hover:bg-white">
        Select Theme
      </div>
    </button>
  );
};
