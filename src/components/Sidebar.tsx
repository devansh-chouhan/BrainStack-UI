import { LayoutDashboard, MessageSquare, Play, Hash, Settings, LogOut, BrainCircuit } from "lucide-react";
import { SidebarItem } from "./SidebarItem.tsx";

export const SideBar = () => {
  return (
    <div className="h-screen bg-white border-r border-border w-72 fixed left-0 top-0 flex flex-col z-20">
      {/* Brand Header */}
      <div className="p-6">
        <div className="flex items-center gap-3 text-primary">
          <div className="p-2 bg-primary-light rounded-xl">
            <BrainCircuit size={28} />
          </div>
          <h1 className="font-bold text-xl tracking-tight text-text-primary">
            BrainStack
          </h1>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="space-y-1">
          <SidebarItem text="Dashboard" icon={<LayoutDashboard size={20} />} active />
          <SidebarItem text="Tweets" icon={<MessageSquare size={20} />} />
          <SidebarItem text="Videos" icon={<Play size={20} />} />
          <SidebarItem text="Tags" icon={<Hash size={20} />} />
        </div>
      </div>

      {/* Footer Items */}
      <div className="p-4 border-t border-border bg-slate-50/50">
        <SidebarItem text="Settings" icon={<Settings size={20} />} />
        <SidebarItem text="Logout" icon={<LogOut size={20} />} />
      </div>
    </div>
  );
};