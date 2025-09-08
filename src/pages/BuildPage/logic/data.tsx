import type { ThemeConfigs } from "@/pages/BuildPage/logic/types";
import { PartyPopper, AlertTriangle, Globe, GaugeIcon } from "lucide-react";

export const THEME_SETTINGS: ThemeConfigs[] = [
  {
    theme: "celebration",
    title: "Celebration",
    description: "Perfect for announcements, milestones, and good news",
    icon: <PartyPopper color="white" />,
    mainColor: "#F59E0B",

    colors: ["#F59E0B", "#FDBA74", "#FEF3C7"],
    secondaryColors: ["#FDBA74", "#FEF3C7", "#FFFBEB"],
    textColors: ["white", "white", "#64748b"],
  },
  {
    theme: "urgent",
    title: "Urgent",
    description: "Use when immediacy and attention are critical",
    icon: <AlertTriangle color="white" />,
    mainColor: "#DC2626",

    colors: ["#DC2626", "#F87171", "#FEE2E2"],
    secondaryColors: ["#F87171", "#FEE2E2", "#FEF2F2"],
    textColors: ["white", "white", "#64748b"],
  },
  {
    theme: "informative",
    title: "Informative",
    description: "Share updates, reports, and useful information",
    icon: <Globe color="white" />,
    mainColor: "#2563EB",
    colors: ["#2563EB", "#60A5FA", "#E0F2FE"],
    secondaryColors: ["#60A5FA", "#E0F2FE", "#EFF6FF"],
    textColors: ["white", "white", "#64748b"],
  },
  {
    theme: "other",
    title: "Other",
    description: "A balanced palette for general purpose messages",
    icon: <GaugeIcon color="white" />,
    mainColor: "#475569",
    colors: ["#475569", "#CBD5E1", "#F8FAFC"],
    secondaryColors: ["#CBD5E1", "#F8FAFC", "#F9FAFB"],
    textColors: ["white", "white", "#64748b"],
  },
];
