import type { LetterTheme } from "@/pages/BuildPage/logic/types";
import type { ReactNode } from "react";

// User types
export interface User {
  id: string;
  name: string;
  email: string;
}

// Group types
export interface Group {
  id: string;
  name: string;
  description: string;
  users: User[];
}

// User Link types
export interface UserLink {
  id: string;
  groupId: string;
  userId: string;
  userEmail: string;
  opened: boolean;
}

// Campaign types
export interface EmailContent {
  title: string;
  content: string;
  actionUrl: string;
  actionLabel: string;
}

export interface EmailTheme {
  mainColor: string;
  secondaryColor: string;
  textColor: string;
  icon: ReactNode;
}

export interface Campaign {
  id: string;
  createdAt: string;
  chosenTheme: LetterTheme;
  email: EmailContent;
  theme: EmailTheme;
  links: UserLink[];
}

// Store state types
export interface GroupsState {
  groups: Group[];
}

export interface CampaignsState {
  campaigns: Campaign[];
}

export interface UsersState {
  users: User[];
  currentUser: User | null;
}

// Action types for stores
export interface GroupsActions {
  addGroup: (group: Omit<Group, "id">) => void;
  updateGroup: (id: string, updates: Partial<Omit<Group, "id">>) => void;
  deleteGroup: (id: string) => void;
  addUserToGroup: (groupId: string, user: User) => void;
  removeUserFromGroup: (groupId: string, userId: string) => void;
}

export interface CampaignsActions {
  addCampaign: (
    chosenTheme: LetterTheme,
    content: EmailContent,
    theme: EmailTheme,
    groups: Group[]
  ) => void;
  updateLinkOpened: (linkId: string) => void;
}

// Combined store types
export type GroupsStore = GroupsState & GroupsActions;
export type CampaignsStore = CampaignsState & CampaignsActions;
