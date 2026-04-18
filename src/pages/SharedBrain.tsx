import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Card } from "../components/Card";
import { LoadingPage } from "../components/LoadingPage";
import { BrainCircuit } from "lucide-react";

export const SharedBrain = () => {
  const { shareLink } = useParams();
  const [content, setContent] = useState([]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSharedContent = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${shareLink}`);
        if (response.data.username) {
          setUsername(response.data.username);
          setContent(response.data.content);
        } else {
          setError(response.data.message || "Invalid share link");
        }
      } catch {
        setError("Failed to fetch shared content");
      } finally {
        setLoading(false);
      }
    };

    if (shareLink) {
      fetchSharedContent();
    }
  }, [shareLink]);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Oops!</h1>
        <p className="text-slate-600 mb-4">{error}</p>
        <a href="/" className="text-primary hover:underline font-medium">
          Go back home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 py-6 px-8 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="bg-primary/10 p-2 rounded-xl">
             <BrainCircuit className="text-primary" size={32} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{username}'s Brain</h1>
            <p className="text-sm text-slate-500">Shared second brain collection</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-10">
        {content.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map(({ link, title, _id }) => (
              <Card 
                key={_id} 
                link={link} 
                title={title} 
                // No delete option for shared view
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500">This brain is currently empty.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm">
          Powered by <span className="font-bold text-slate-600">BrainStack</span>
        </p>
      </footer>
    </div>
  );
};
