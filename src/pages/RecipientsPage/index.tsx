import React, { useState } from "react";
import { Plus, Users } from "lucide-react";
import { useGroupsStore } from "../../zustand/useGroupsStore";
import { GroupFormModal } from "./components/GroupForm";
import GroupUsersForm from "./components/GroupUsersForm";
import type { Group } from "../../zustand/types";
import GroupCard from "./components/GroupCard";

const RecipientsPage = () => {
  const { groups, deleteGroup } = useGroupsStore();
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);
  const [isUsersModalOpen, setIsUsersModalOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);

  const handleAddGroup = () => {
    setEditingGroup(null);
    setIsGroupModalOpen(true);
  };

  const handleEditGroup = (group: Group) => {
    setEditingGroup(group);
    setIsGroupModalOpen(true);
  };

  const handleEditUsers = (group: Group) => {
    setEditingGroup(group);
    setIsUsersModalOpen(true);
  };

  const handleDeleteGroup = (groupId: string) => {
    if (window.confirm("Are you sure you want to delete this group?")) {
      deleteGroup(groupId);
    }
  };

  const handleCloseGroupModal = () => {
    setIsGroupModalOpen(false);
    setEditingGroup(null);
  };

  const handleCloseUsersModal = () => {
    setIsUsersModalOpen(false);
    setEditingGroup(null);
  };

  return (
    <div className="flex h-full w-full flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Recipient Groups
            </h1>
            <p className="text-gray-600 mt-1">
              Manage your email lists and recipient groups
            </p>
          </div>
          <button
            onClick={handleAddGroup}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F2580D] to-[#F8AB86] text-white rounded-lg hover:from-[#E04A0B] hover:to-[#F69A7A] transition-all duration-200 shadow-md"
          >
            <Plus size={20} />
            Add Group
          </button>
        </div>
      </div>

      {/* Groups List */}
      <div className="flex-1 p-6 overflow-y-auto">
        {groups.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <Users size={64} className="mb-4 text-gray-300" />
            <h3 className="text-xl font-medium mb-2">No groups yet</h3>
            <p className="text-center mb-6">
              Create your first recipient group to start managing your email
              lists
            </p>
            <button
              onClick={handleAddGroup}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F2580D] to-[#F8AB86] text-white rounded-lg hover:from-[#E04A0B] hover:to-[#F69A7A] transition-all duration-200 shadow-md"
            >
              <Plus size={20} />
              Create Your First Group
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <GroupCard
                key={group.id}
                group={group}
                handleEditGroup={handleEditGroup}
                handleDeleteGroup={handleDeleteGroup}
                handleEditUsers={handleEditUsers}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modals */}
      <GroupFormModal
        isOpen={isGroupModalOpen}
        onClose={handleCloseGroupModal}
        group={editingGroup}
      />
      {editingGroup && (
        <GroupUsersForm
          isOpen={isUsersModalOpen}
          onClose={handleCloseUsersModal}
          group={editingGroup}
        />
      )}
    </div>
  );
};

export default RecipientsPage;
