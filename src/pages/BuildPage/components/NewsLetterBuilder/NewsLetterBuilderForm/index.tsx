import type { ThemeConfigs } from "@/pages/BuildPage/logic/types";
import type { Group } from "@/zustand";
import Select from "react-select";

type Props = {
  title: string;
  content: string;
  actionLabel: string;
  actionUrl: string;
  selectedTheme: ThemeConfigs;
  setForm: (
    item: "title" | "content" | "actionUrl" | "actionLabel",
    value: string
  ) => void;
  setColorIndex: (index: number) => void;
  selectedColorIndex: number;
  resetForm: () => void;
  isSending: boolean;
  selectedGroups: Group[];
  setSelectedGroups: (groups: Group[]) => void;
  availableGroups: Group[];
};

export const NewsLetterBuilderForm = ({
  title,
  content,
  actionLabel,
  actionUrl,
  selectedTheme,
  setForm,
  setColorIndex,
  selectedColorIndex,
  resetForm,
  isSending,
  selectedGroups,
  setSelectedGroups,
  availableGroups,
}: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Newsletter Title</label>
        <input
          type="text"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300"
          placeholder="Enter your newsletter title..."
          value={title}
          onChange={(e) => setForm("title", e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Newsletter Content</label>
        <textarea
          className="min-h-[180px] w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300"
          placeholder="Write your newsletter content here..."
          value={content}
          onChange={(e) => setForm("content", e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-slate-700">
            Action Label
          </label>
          <input
            type="text"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300"
            placeholder="e.g., View Details"
            value={actionLabel}
            onChange={(e) => setForm("actionLabel", e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label className="text-sm font-medium text-slate-700">
            Action URL
          </label>
          <input
            type="url"
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-300"
            placeholder="https://example.com"
            value={actionUrl}
            onChange={(e) => setForm("actionUrl", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <span className="text-sm font-medium text-slate-700">Choose Color</span>
        <div className="flex items-center gap-4">
          {selectedTheme.colors.map((c, index) => (
            <button
              key={c}
              type="button"
              onClick={() => setColorIndex(index)}
              className={`h-8 w-8 rounded-full border transition-all cursor-pointer ${
                selectedColorIndex === index
                  ? "ring-2 ring-offset-2 ring-slate-400"
                  : "border-slate-200"
              }`}
              style={{ background: c }}
              aria-label={`Select color ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">Select Groups</label>
        <Select
          isMulti
          options={availableGroups.map((group) => ({
            value: group,
            label: `${group.name} (${group.users.length} users)`,
          }))}
          value={selectedGroups.map((group) => ({
            value: group,
            label: `${group.name} (${group.users.length} users)`,
          }))}
          onChange={(selectedOptions) => {
            const groups = selectedOptions
              ? selectedOptions.map((option) => option.value)
              : [];
            setSelectedGroups(groups);
          }}
          placeholder="Select groups to send newsletter to..."
          className="react-select-container"
          classNamePrefix="react-select"
          isDisabled={isSending}
          styles={{
            control: (base) => ({
              ...base,
              border: "1px solid #e2e8f0",
              borderRadius: "12px",
              minHeight: "48px",
              backgroundColor: "#f8fafc",
              "&:hover": {
                border: "1px solid #cbd5e1",
              },
            }),
            placeholder: (base) => ({
              ...base,
              color: "#64748b",
            }),
            multiValue: (base) => ({
              ...base,
              backgroundColor: "#e2e8f0",
              borderRadius: "8px",
            }),
            multiValueLabel: (base) => ({
              ...base,
              color: "#334155",
            }),
            multiValueRemove: (base) => ({
              ...base,
              color: "#64748b",
              "&:hover": {
                backgroundColor: "#cbd5e1",
                color: "#334155",
              },
            }),
          }}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-lg border border-slate-200 px-4 py-2 text-slate-700"
          onClick={() => {
            resetForm();
            setSelectedGroups([]);
          }}
          disabled={isSending}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
