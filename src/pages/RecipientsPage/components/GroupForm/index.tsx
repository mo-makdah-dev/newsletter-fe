import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { X } from "lucide-react";
import { useGroupsStore } from "../../../../zustand/useGroupsStore";
import type { Group } from "../../../../zustand/types";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  group: Group | null;
}

export const GroupFormModal = ({ isOpen, onClose, group }: Props) => {
  const { addGroup, updateGroup } = useGroupsStore();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Initialize form data when group changes
  useEffect(() => {
    if (group) {
      setFormData({
        name: group.name,
        description: group.description,
      });
    } else {
      setFormData({
        name: "",
        description: "",
      });
    }
  }, [group]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (group) {
      // Update existing group
      updateGroup(group.id, formData);
    } else {
      // Create new group
      addGroup({
        name: formData.name,
        description: formData.description,
        users: [],
      });
    }

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      contentLabel="Group Form Modal"
      shouldCloseOnOverlayClick={true}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            {group ? "Edit Group" : "Create Group"}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Group Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Group Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter group name"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter group description"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              >
                {group ? "Update Group" : "Create Group"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};
