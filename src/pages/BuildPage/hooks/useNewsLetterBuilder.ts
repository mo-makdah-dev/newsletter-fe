import type { Group } from "@/zustand";
import { useState } from "react";
import { useCampaignsStore } from "@/zustand";
import { useNavigate } from "react-router-dom";
import type { ThemeConfigs } from "../logic/types";

export const useNewsLetterBuilder = () => {
  const { addCampaign } = useCampaignsStore();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [actionUrl, setActionUrl] = useState("");
  const [actionLabel, setActionLabel] = useState("");
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setActionUrl("");
    setActionLabel("");
    setSelectedColorIndex(0);
    setSelectedGroups([]);
  };

  const setForm = (
    item: "title" | "content" | "actionUrl" | "actionLabel",
    value: string
  ) => {
    if (item === "title") setTitle(value);
    if (item === "content") setContent(value);
    if (item === "actionUrl") setActionUrl(value);
    if (item === "actionLabel") setActionLabel(value);
  };

  const setGroups = (groups: Group[]) => {
    setSelectedGroups(groups);
  };

  const setColorIndex = (index: number) => {
    setSelectedColorIndex(index);
  };

  const sendNewsLetter = (selectedTheme: ThemeConfigs) => {
    setIsSending(true);

    // Create the email content
    const emailContent = {
      title,
      content,
      actionUrl,
      actionLabel,
    };

    // Create the email theme
    const emailTheme = {
      mainColor: selectedTheme.colors[selectedColorIndex],
      secondaryColor: selectedTheme.secondaryColors[selectedColorIndex],
      textColor: selectedTheme.textColors[selectedColorIndex],
      icon: selectedTheme.icon,
    };

    // Add campaign to store
    addCampaign(selectedTheme.theme, emailContent, emailTheme, selectedGroups);

    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
      resetForm();

      // Navigate to campaigns page
      navigate("/campaigns");
    }, 1000);
  };

  const disabled =
    !title ||
    !content ||
    !actionUrl ||
    !actionLabel ||
    isSending ||
    selectedGroups.length === 0;

  return {
    title,
    content,
    actionUrl,
    actionLabel,
    isSending,
    resetForm,
    setForm,
    sendNewsLetter,
    disabled,
    setColorIndex,
    selectedColorIndex,
    setGroups,
    selectedGroups,
  };
};
