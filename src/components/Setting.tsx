import { useSetting } from "../hooks/useSetting.tsx"
import { X, User, Share2, Shield, Settings, CheckCircle2 } from "lucide-react";

interface SettingProps {
    onClose: () => void;
}

export const Setting = ({ onClose }: SettingProps) => {
    const { username, sharable } = useSetting();

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-premium border border-border overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-primary/10 text-primary rounded-lg">
                            <Settings size={18} />
                        </div>
                        <h2 className="font-bold text-lg text-text-primary">Settings</h2>
                    </div>
                    <button 
                        onClick={onClose}
                        className="p-2 hover:bg-slate-100 rounded-full text-text-muted hover:text-text-primary transition-all"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Profile Section */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted px-1">Account Information</h3>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-border">
                            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg">
                                <User size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-medium text-text-secondary leading-none mb-1">Username</div>
                                <div className="text-lg font-bold text-text-primary">{username || "Loading..."}</div>
                            </div>
                            <div className="ml-auto">
                                <div className="px-2 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded uppercase">Active</div>
                            </div>
                        </div>
                    </div>

                    {/* Sharing Section */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted px-1">Privacy & Sharing</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-border group">
                                <div className="p-2 bg-blue-50 text-blue-500 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <Share2 size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <div className="text-sm font-bold text-text-primary">Profile Visibility</div>
                                        {sharable ? (
                                            <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-500">
                                                <CheckCircle2 size={12} /> PUBLIC
                                            </span>
                                        ) : (
                                            <span className="text-[10px] font-bold text-text-muted">PRIVATE</span>
                                        )}
                                    </div>
                                    <p className="text-xs text-text-secondary leading-normal">
                                        {sharable 
                                            ? "Your brain is currently public and can be viewed via your unique hash link." 
                                            : "Your brain is private. No one can see your saved content but you."}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-border group">
                                <div className="p-2 bg-amber-50 text-amber-500 rounded-lg group-hover:bg-amber-100 transition-colors">
                                    <Shield size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-bold text-text-primary mb-1">Security Status</div>
                                    <p className="text-xs text-text-secondary leading-normal">
                                        End-to-end encryption is active for all your saved snippets and links.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-slate-50/50 border-t border-border flex justify-end gap-3">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-bold text-text-secondary hover:text-text-primary transition-colors"
                    >
                        Close
                    </button>
                    <button 
                        className="px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-bold shadow-md transition-all active:scale-95"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};
