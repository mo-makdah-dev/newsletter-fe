import React, { useState } from "react";
import Modal from "react-modal";
import { X, Plus, Trash2 } from "lucide-react";
import { useGroupsStore } from "../../../../zustand/useGroupsStore";
import type { Group, User } from "../../../../zustand/types";

interface GroupUsersFormProps {
  isOpen: boolean;
  onClose: () => void;
  group: Group;
}

interface NewUser {
  name: string;
  email: string;
}

const GroupUsersForm: React.FC<GroupUsersFormProps> = ({
  isOpen,
  onClose,
  group,
}) => {
  const { addUserToGroup, removeUserFromGroup } = useGroupsStore();

  const [newUser, setNewUser] = useState<NewUser>({
    name: "",
    email: "",
  });

  // Get the latest group data from store
  const { groups } = useGroupsStore();
  const currentGroup = groups.find((g) => g.id === group.id) || group;

  const handleNewUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    if (newUser.name.trim() && newUser.email.trim()) {
      const user: User = {
        id: crypto.randomUUID(),
        name: newUser.name.trim(),
        email: newUser.email.trim(),
      };

      addUserToGroup(group.id, user);
      setNewUser({ name: "", email: "" });
    }
  };

  const handleRemoveUser = (userId: string) => {
    removeUserFromGroup(group.id, userId);
  };

  const handleClearNewUser = () => {
    setNewUser({ name: "", email: "" });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      contentLabel="Group Users Form Modal"
      shouldCloseOnOverlayClick={true}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Manage Users - {currentGroup.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-6">
            {/* Add User Form */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Add User
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  value={newUser.name}
                  onChange={handleNewUserChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleNewUserChange}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Email"
                />
              </div>
              <div className="flex gap-2 mt-3">
                <button
                  type="button"
                  onClick={handleAddUser}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                >
                  <Plus size={16} />
                  Add
                </button>
                <button
                  type="button"
                  onClick={handleClearNewUser}
                  className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors text-sm"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Users List */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">
                Users ({currentGroup.users.length})
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {currentGroup.users.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p className="text-sm">No users in this group yet</p>
                    <p className="text-xs mt-1">
                      Add users using the form above
                    </p>
                  </div>
                ) : (
                  currentGroup.users.map((user) => (
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user.email}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleRemoveUser(user.id)}
                        className="ml-2 p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GroupUsersForm;
