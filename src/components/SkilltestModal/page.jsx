"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";
import { useFormData } from "@/context/FormContext";

const SkilltestModal = ({ isOpen, onClose }) => {
  const { formData, setFormData } = useFormData();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    onClose(); // Close modal after submission
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Update Scores</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="flex items-center gap-2 justify-between">
            <p>
              <span>1</span> Update your <span className="font-bold">Rank</span>
            </p>
            <input
              type="text"
              value={formData.rank}
              onChange={(e) =>
                setFormData({ ...formData, rank: e.target.value })
              }
              className="p-2 border rounded w-1/3"
            />
          </div>

          <div className="flex items-center gap-2 justify-between">
            <p>
              <span>2</span> Update your{" "}
              <span className="font-bold">Percentile</span>
            </p>
            <input
              type="text"
              value={formData.percentile}
              onChange={(e) =>
                setFormData({ ...formData, percentile: e.target.value })
              }
              className="p-2 border rounded w-1/3"
            />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <p>
              <span>3</span> Update your{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </p>
            <input
              type="text"
              value={formData.currentScore}
              onChange={(e) =>
                setFormData({ ...formData, currentScore: e.target.value })
              }
              className="p-2 border rounded w-1/3"
            />
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-blue-950 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex gap-2 items-center px-4 py-2 bg-blue-950 text-white rounded"
            >
              <p>Save</p> <ArrowRight size={15} color="white" />
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SkilltestModal;
