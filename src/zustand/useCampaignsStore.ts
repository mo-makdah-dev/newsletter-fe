import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type {
  CampaignsStore,
  Campaign,
  EmailContent,
  EmailTheme,
  Group,
  UserLink,
} from "./types";
import type { LetterTheme } from "@/pages/BuildPage/logic/types";

export const useCampaignsStore = create<CampaignsStore>()(
  persist(
    (set) => ({
      // Initial state
      campaigns: [],

      // Actions
      addCampaign: (
        chosenTheme: LetterTheme,
        content: EmailContent,
        theme: EmailTheme,
        groups: Group[]
      ) => {
        const campaignId = uuidv4();

        // Create UserLink objects for all users in the provided groups
        const links: UserLink[] = groups.flatMap((group) =>
          group.users.map((user) => ({
            id: uuidv4(),
            groupId: group.id,
            userId: user.id,
            userEmail: user.email,
            opened: false,
          }))
        );

        const newCampaign: Campaign = {
          id: campaignId,
          createdAt: new Date().toISOString(),
          chosenTheme: chosenTheme,
          email: content,
          theme: theme,
          links: links,
        };

        set((state) => ({
          campaigns: [...state.campaigns, newCampaign],
        }));
      },

      updateLinkOpened: (linkId: string) => {
        set((state) => ({
          campaigns: state.campaigns.map((campaign) => ({
            ...campaign,
            links: campaign.links.map((link) =>
              link.id === linkId ? { ...link, opened: true } : link
            ),
          })),
        }));
      },
    }),
    {
      name: "campaigns-storage", // unique name for localStorage key
    }
  )
);
