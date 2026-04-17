import { Share2, ExternalLink, Trash2, Play as Youtube, MessageSquare as Twitter, FileText } from "lucide-react";
import { useEffect } from "react";

interface CardProps {
  title: string;
  link: string;
  onDelete?: () => void;
  onShare?: () => void;
}

const getLinkType = (link: string): "tweet" | "video" | "document" => {
    if (link.includes("youtube.com") || link.includes("youtu.be")) return "video";
    if (link.includes("twitter.com") || link.includes("x.com")) return "tweet";
    return "document";
}

export const Card = ({ title, link, onDelete, onShare }: CardProps) => {
  const type = getLinkType(link);
  const Icon = type === "video" ? Youtube : type === "tweet" ? Twitter : FileText;

  useEffect(() => {
  if (type === "tweet" && window.twttr) {
    window.twttr.widgets.load();
  }
}, [type, link]);

  return (
    <div className="group bg-white rounded-xl border border-border overflow-hidden flex flex-col min-h-[320px] w-full sm:max-w-[340px] shadow-sm hover:shadow-premium transition-all duration-300">
      {/* Card Header */}
      <div className="p-4 flex items-center justify-between border-b border-slate-50">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className={`p-2 rounded-lg ${
            type === 'video' ? 'bg-red-50 text-red-600' : 
            type === 'tweet' ? 'bg-blue-50 text-blue-600' : 
            'bg-slate-50 text-slate-600'
          }`}>
            <Icon size={18} />
          </div>
          <h3 className="font-semibold text-text-primary text-sm truncate">
            {title}
          </h3>
        </div>
        
        <div className="flex items-center gap-1">
          <button 
            onClick={onShare}
            className="p-1.5 text-text-muted hover:text-primary hover:bg-primary-light rounded-md transition-colors"
            title="Share"
          >
            <Share2 size={16} />
          </button>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-secondary-light rounded-md transition-colors"
            title="Open original"
          >
            <ExternalLink size={16} />
          </a>
          {onDelete && (
            <button 
              onClick={onDelete}
              className="p-1.5 text-text-muted hover:text-error hover:bg-red-50 rounded-md transition-colors group-hover:opacity-100"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-4 bg-slate-50/30">
        <div className="aspect-video w-full rounded-lg overflow-hidden bg-slate-100 border border-border shadow-inner">
          {type === "video" && (
            <iframe
              className="w-full h-full"
              src={link.includes("watch?v=") ? link.replace("watch?v=", "embed/") : link.replace("youtu.be/", "youtube.com/embed/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          )}

          {type === "tweet" && (
            <div className="h-full overflow-y-auto no-scrollbar">
                <blockquote className="twitter-tweet w-full">
                    <a href={link.replace("x.com", "twitter.com")}></a>
                </blockquote>
            </div>
          )}

          {type === "document" && (
            <div className="h-full flex flex-col items-center justify-center text-text-muted gap-2">
                <FileText size={40} strokeWidth={1.5} />
                <span className="text-xs font-medium uppercase tracking-wider">Document Preview</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Card Footer (Tags - Future Improvement) */}
      <div className="px-4 pb-4 pt-0 flex gap-2 overflow-x-auto no-scrollbar">
        <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-bold text-slate-500 rounded uppercase tracking-wider">#{type}</span>
      </div>
    </div>
  );
};