import { useEffect, useState } from "react";
import { Button } from "../components/Button.tsx";
import { Card } from "../components/Card.tsx";
import { ContentModal } from "../components/ContentModal.tsx";
import { Plus, Share2, Search } from "lucide-react";
import { SideBar } from "../components/Sidebar.tsx";
import { useContent } from "../hooks/useContent.tsx";
import axios from "axios";
import { BACKEND_URL } from "../config.tsx";

export const Dashboard = () => {
  const [modelOpen, setModelOpen] = useState(false);
  const { contents, refresh } = useContent();

  useEffect(() => {
    refresh();
  }, [modelOpen]);

  return (
    <div className="min-h-screen bg-background flex">
      <SideBar />

      <main className="flex-1 ml-72 min-h-screen flex flex-col">
        <ContentModal open={modelOpen} onClose={() => setModelOpen(false)} />

        {/* Dashboard Header */}
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-border px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">Your Brain</h1>
              <p className="text-sm text-text-secondary">Capture and organize your digital knowledge.</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block mr-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                <input 
                  type="text" 
                  placeholder="Search your notes..." 
                  className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary/20 w-64 transition-all"
                />
              </div>
              <Button
                onClick={() => setModelOpen(true)}
                text="Add Content"
                variant="primary"
                startIcon={<Plus size={20} />}
              />
              <Button
                text="Share Brain"
                variant="secondary"
                startIcon={<Share2 size={20} />}
                onClick={async () => {
                  const response = await axios.post(
                    `${BACKEND_URL}/api/v1/brain/share`,
                    { share: true },
                    {
                      headers: {
                        Authorization: localStorage.getItem("token"),
                      },
                    }
                  );
                  const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                  // In a real app, use a toast instead of alert
                  alert(`Share link created: ${shareUrl}`);
                }}
              />
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {contents?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {contents.map(({ link, title , _id}) => (
                  <Card key={_id} link={link} title={title} onDelete={async () => {
                    await axios.delete(`${BACKEND_URL}/api/v1/content` , {
                      data:{
                        contentId:_id
                      },
                      headers:{
                        "Authorization":localStorage.getItem("token"),
                      }
                    })
                    refresh()
                  }}/>
                ))}
              </div>
            ) : (
              <div className="h-[60vh] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-400">
                    <Search size={40} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">No content yet</h3>
                <p className="text-text-secondary max-w-sm">
                  Click the "Add Content" button to start building your personal knowledge base.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};