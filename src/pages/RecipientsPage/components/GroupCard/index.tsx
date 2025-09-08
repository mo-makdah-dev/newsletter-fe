import type { Group } from "@/zustand";
import { Edit, Trash2, Users } from "lucide-react";

type Props = {
  group: Group;
  handleEditGroup: (group: Group) => void;
  handleDeleteGroup: (groupId: string) => void;
  handleEditUsers: (group: Group) => void;
};
export default function GroupCard({
  group,
  handleEditGroup,
  handleDeleteGroup,
  handleEditUsers,
}: Props) {
  return (
    <div
      key={group.id}
      className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {group.name}
            </h3>
            <p className="text-sm text-gray-600">
              {group.description || "No description"}
            </p>
          </div>
          <div className="flex items-center gap-1 ml-4">
            <button
              onClick={() => handleEditGroup(group)}
              className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              title="Edit group"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => handleDeleteGroup(group.id)}
              className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Delete group"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* User Count */}
        <div
          className="flex items-center gap-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer w-fit p-2 rounded-md"
          onClick={() => handleEditUsers(group)}
        >
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Users size={16} />
            <span>
              {group.users.length} {group.users.length === 1 ? "user" : "users"}
            </span>
          </div>
          <Edit size={14} />
        </div>
      </div>
    </div>
  );
}
