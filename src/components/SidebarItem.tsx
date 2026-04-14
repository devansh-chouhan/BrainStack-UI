import type { ReactElement } from "react";

interface SidebarItemProps {
  text: string;
  icon: ReactElement;
  active?: boolean;
}

export const SidebarItem = ({ text, icon, active }: SidebarItemProps) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2.5 my-1 cursor-pointer rounded-lg transition-all duration-200 group
        ${
          active
            ? "bg-primary-light text-primary shadow-sm"
            : "text-text-secondary hover:bg-secondary-light hover:text-text-primary"
        }`}
    >
      <div
        className={`transition-colors duration-200 ${
          active ? "text-primary" : "text-text-muted group-hover:text-text-primary"
        }`}
      >
        {icon}
      </div>
      <span className="font-semibold text-sm leading-none">{text}</span>
    </div>
  );
};