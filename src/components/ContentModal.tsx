import { useRef, useState } from "react";
import { X, Play as Youtube, MessageSquare as Twitter, Plus } from "lucide-react";
import { Button } from "./Button.tsx";
import { Input } from "./Input.tsx";
import axios from "axios";
import { BACKEND_URL } from "../config.tsx";

const ContentType = {
  Youtube: "video",
  Twitter: "tweet",
};

interface ContentModalProps {
  open: boolean;
  onClose: () => void;
}

export const ContentModal = ({ open, onClose }: ContentModalProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  async function addContent() {
    setLoading(true);
    try {
      const title = titleRef.current?.value;
      const link = linkRef.current?.value;

      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        { link, title },
        {
          headers: {
            "Authorization": localStorage.getItem("token"),
          },
        }
      );
      onClose();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-premium overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-text-primary">Add New Content</h2>
            <button
              onClick={onClose}
              className="p-1 text-text-muted hover:text-text-primary hover:bg-slate-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <Input label="Title" ref={titleRef} placeholder="e.g. My Favorite React Video" />
            <Input label="Link" ref={linkRef} placeholder="e.g. https://youtube.com/..." />
          </div>

          <div className="mt-8">
            <Button
              onClick={addContent}
              variant="primary"
              text="Add Content"
              fullWidth={true}
              loading={loading}
              startIcon={<Plus size={18} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

