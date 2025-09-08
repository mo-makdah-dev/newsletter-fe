import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import type { GroupsStore, Group } from "./types";

export const useGroupsStore = create<GroupsStore>()(
  persist(
    (set) => ({
      // Initial state
      groups: [],

      // Actions
      addGroup: (groupData) => {
        const newGroup: Group = {
          id: uuidv4(),
          ...groupData,
        };

        set((state) => ({
          groups: [...state.groups, newGroup],
        }));
      },

      updateGroup: (id, updates) => {
        set((state) => ({
          groups: state.groups.map((group) =>
            group.id === id ? { ...group, ...updates } : group
          ),
        }));
      },

      deleteGroup: (id) => {
        set((state) => ({
          groups: state.groups.filter((group) => group.id !== id),
        }));
      },

      addUserToGroup: (groupId, user) => {
        set((state) => ({
          groups: state.groups.map((group) =>
            group.id === groupId
              ? { ...group, users: [...group.users, user] }
              : group
          ),
        }));
      },

      removeUserFromGroup: (groupId, userId) => {
        set((state) => ({
          groups: state.groups.map((group) =>
            group.id === groupId
              ? {
                  ...group,
                  users: group.users.filter((user) => user.id !== userId),
                }
              : group
          ),
        }));
      },
    }),
    {
      name: "groups-storage", // unique name for localStorage key
    }
  )
);
